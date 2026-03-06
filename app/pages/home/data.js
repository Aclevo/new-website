import { config } from "../../config";

const { org, github } = config;

const fetchJson = async (url) => {
  const res = await fetch(url, {
    headers: github.headers,
    next: { revalidate: github.revalidate },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export async function getTopProject() {
  const data = await fetchJson(`${org.githubApi}/repos/${org.name}/LBNets`);
  return {
    name: "LBNets",
    tagline: "A revolution in AI technology with baked-in reasoning",
    description:
      "Try out the latest innovation to artifical intelligence! Try out our first ever Logic-Based/Reasoning-Based Transformers!",
    stars: data.stargazers_count,
    contributors: data.contributors_count,
    openIssues: data.open_issues_count,
  };
}

export async function getProjects() {
  const repos = await fetchJson(`${org.githubApi}/orgs/${org.name}/repos`);
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
}

export async function getStats() {
  const [orgData, members] = await Promise.all([
    fetchJson(`${org.githubApi}/orgs/${org.name}`),
    fetchJson(`${org.githubApi}/orgs/${org.name}/members`),
  ]);
  return [
    { label: "Public Repos", value: orgData.public_repos },
    { label: "Followers", value: orgData.followers },
    { label: "Public Members", value: members.length },
  ];
}

export async function getMembers() {
  const members = await fetchJson(`${org.githubApi}/orgs/${org.name}/members`);
  const users = await Promise.all(
    members.map((m) => fetchJson(`${org.githubApi}/users/${m.login}`)),
  );
  const socials = await Promise.all(
    users.map((u) =>
      fetchJson(`${org.githubApi}/users/${u.login}/social_accounts`).catch(
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
}
