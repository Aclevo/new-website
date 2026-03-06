import { cache } from "react";
import { notFound } from "next/navigation";
import { config } from "../../config";

const { org, github } = config;

const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: github.headers,
        next: { revalidate: github.revalidate },
      });

      if (!res.ok) {
        if (res.status === 404) {
          notFound();
        }
        if (res.status === 429 && i < retries - 1) {
          // Rate limited, wait and retry
          await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
          continue;
        }
        throw new Error(
          `Failed to fetch ${url}: ${res.status} ${res.statusText}`,
        );
      }

      return res.json();
    } catch (error) {
      if (i === retries - 1) {
        console.error(
          `Fetch error for ${url} after ${retries} retries:`,
          error,
        );
        throw error;
      }
    }
  }
};

export const getTopProject = cache(async () => {
  "use cache";
  const data = await fetchWithRetry(
    `${org.githubApi}/repos/${org.name}/LBNets`,
  );
  return {
    name: "LBNets",
    tagline: "A revolution in AI technology with baked-in reasoning",
    description:
      "Try out the latest innovation to artifical intelligence! Try out our first ever Logic-Based/Reasoning-Based Transformers!",
    stars: data.stargazers_count,
    contributors: data.contributors_count,
    openIssues: data.open_issues_count,
  };
});

export const getProjects = cache(async () => {
  "use cache";
  const repos = await fetchWithRetry(`${org.githubApi}/orgs/${org.name}/repos`);
  return repos
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        !github.excludedRepos.includes(repo.name),
    )
    .map((repo) => ({
      name: repo.name,
      summary: repo.description || "No description",
      status: "Active",
      stars: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics,
      html_url: repo.html_url,
    }));
});

export const getStats = cache(async () => {
  "use cache";
  const [orgData, members] = await Promise.all([
    fetchWithRetry(`${org.githubApi}/orgs/${org.name}`),
    fetchWithRetry(`${org.githubApi}/orgs/${org.name}/members`),
  ]);
  return [
    { label: "Public Repos", value: orgData.public_repos },
    { label: "Followers", value: orgData.followers },
    { label: "Public Members", value: members.length },
  ];
});

export const getMembers = cache(async () => {
  "use cache";
  const members = await fetchWithRetry(
    `${org.githubApi}/orgs/${org.name}/members`,
  );
  const users = await Promise.all(
    members.map((m) => fetchWithRetry(`${org.githubApi}/users/${m.login}`)),
  );
  const socials = await Promise.all(
    users.map((u) =>
      fetchWithRetry(`${org.githubApi}/users/${u.login}/social_accounts`).catch(
        (error) => {
          console.error(
            `Failed to fetch social accounts for ${u.login}:`,
            error,
          );
          return [];
        },
      ),
    ),
  );

  return users.map((user, i) => ({
    id: user.id,
    username: user.login,
    html_url: user.html_url,
    avatar_url: user.avatar_url,
    bio: user.bio,
    socials: socials[i] || [],
  }));
});
