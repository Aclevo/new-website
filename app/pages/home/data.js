export const siteTitle = "Aclevo";

const GITHUB_REPOS_URL = "https://api.github.com/repos/Aclevo/";
const GITHUB_ORG_URL = "https://api.github.com/orgs/Aclevo";

export async function getTopProject() {
  const res = await fetch(`${GITHUB_REPOS_URL}LBNets`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 300 }, // Revalidate every 5 minutes
  });
  if (!res.ok) throw new Error("Failed to fetch LBNets repo");
  const data = await res.json();
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
  const res = await fetch(`${GITHUB_ORG_URL}/repos`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error("Failed to fetch org repos");
  const repos = await res.json();
  return repos
    .filter((repo) => !repo.fork && !repo.archived && repo.name !== ".github") // Only show original repos, exclude .github
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
  const [orgRes, membersRes] = await Promise.all([
    fetch(`${GITHUB_ORG_URL}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 300 },
    }),
    fetch(`${GITHUB_ORG_URL}/members`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 300 },
    }),
  ]);

  if (!orgRes.ok) throw new Error("Failed to fetch org data");
  if (!membersRes.ok) throw new Error("Failed to fetch members");

  const orgData = await orgRes.json();
  const members = await membersRes.json();

  return [
    { label: "Public Repos", value: orgData.public_repos },
    { label: "Followers", value: orgData.followers },
    { label: "Public Members", value: members.length },
  ];
}

export async function getMembers() {
  const res = await fetch(`${GITHUB_ORG_URL}/members`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error("Failed to fetch org members");
  const members = await res.json();
  return members.map((member) => ({
    id: member.id,
    username: member.login,
    html_url: member.html_url,
    avatar_url: member.avatar_url,
  }));
}
