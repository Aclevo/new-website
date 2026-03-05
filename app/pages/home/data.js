export const siteTitle = "Aclevo";

const GITHUB_API = "https://api.github.com";
const ORG = "Aclevo";
const HEADERS = { Accept: "application/vnd.github.v3+json" };
const REVALIDATE = 300;

const fetchJson = async (url) => {
  const res = await fetch(url, {
    headers: HEADERS,
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
};

export async function getTopProject() {
  const data = await fetchJson(`${GITHUB_API}/repos/${ORG}/LBNets`);
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
  const repos = await fetchJson(`${GITHUB_API}/orgs/${ORG}/repos`);
  return repos
    .filter((repo) => !repo.fork && !repo.archived && repo.name !== ".github")
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
    fetchJson(`${GITHUB_API}/orgs/${ORG}`),
    fetchJson(`${GITHUB_API}/orgs/${ORG}/members`),
  ]);
  return [
    { label: "Public Repos", value: orgData.public_repos },
    { label: "Followers", value: orgData.followers },
    { label: "Public Members", value: members.length },
  ];
}

export async function getMembers() {
  const members = await fetchJson(`${GITHUB_API}/orgs/${ORG}/members`);
  const users = await Promise.all(
    members.map((m) => fetchJson(`${GITHUB_API}/users/${m.login}`)),
  );
  const socials = await Promise.all(
    users.map((u) =>
      fetchJson(`${GITHUB_API}/users/${u.login}/social_accounts`).catch(
        () => [],
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
