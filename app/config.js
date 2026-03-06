export const config = {
  org: {
    name: "Aclevo",
    githubUrl: "https://github.com/Aclevo",
    githubApi: "https://api.github.com",
    discordUrl: "https://discord.gg/C6QVUKnJRq",
    websiteUrl: "https://www.aclevo.com",
  },
  site: {
    title: "Aclevo",
    description:
      "Building open source software together. Home to projects like LBNets, Celestial Linux, and more.",
    license: "GPLv3",
  },
  github: {
    headers: { Accept: "application/vnd.github.v3+json" },
    revalidate: 300,
    excludedRepos: [".github"],
  },
};
