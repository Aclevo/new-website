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
    .filter((repo) => !repo.fork && repo.name !== ".github") // Only show original repos, exclude .github
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
  const res = await fetch(`${GITHUB_ORG_URL}`, {
    headers: { Accept: "application/vnd.github.v3+json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error("Failed to fetch org data");
  const data = await res.json();
  return [
    { label: "Public Repos", value: data.public_repos },
    { label: "Followers", value: data.followers },
    { label: "Members", value: 11 },
  ];
}
