import Link from "next/link";
import Image from "next/image";

import MemberList from "../../components/MemberList";
import ProjectList from "../../components/ProjectList";
import StatList from "../../components/StatList";

import {
  siteTitle,
  getTopProject,
  getProjects,
  getStats,
  getMembers,
} from "./data";

const HomePage = async () => {
  const [topProject, projects, stats, members] = await Promise.all([
    getTopProject(),
    getProjects(),
    getStats(),
    getMembers(),
  ]);

  return (
    <div className="space-y-8">
      <section className="hero overflow-hidden rounded-[2rem] border border-primary/25 bg-base-100/35 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="hero-content w-full flex-col items-start gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <div className="badge badge-primary badge-soft">Top Project</div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              {topProject.name}
            </h1>
            <p className="text-lg text-primary/90">{topProject.tagline}</p>
            <p className="text-base-content/80">{topProject.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Aclevo/LBNets"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
              <a
                href="https://github.com/orgs/Aclevo/LBNets/issues/new"
                className="btn btn-ghost border border-white/20 bg-base-100/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit an Issue
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-base-100/35 p-6 shadow-xl backdrop-blur-xl">
            <p className="text-sm font-medium text-base-content/70">
              Project Health
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-base-200/65 p-3">
                <span>GitHub stars</span>
                <span className="badge badge-warning badge-soft">
                  {topProject.stars}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-base-200/65 p-3">
                <span>Open issues</span>
                <span className="badge badge-info badge-soft">
                  {topProject.openIssues}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero overflow-hidden rounded-[2rem] border border-white/15 bg-base-100/30 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="hero-content w-full flex-col items-start gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="badge badge-primary badge-soft">
              Open Source Community
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Explore a community that specializes in a variety of open source
              projects.
            </h1>
            <p className="text-base-content/80">
              {siteTitle} provides many different projects across various open
              source technologies and programming languages. We also build our
              own operating system based on Debian. Our repositories are open
              and accessible to anyone, licensed under the GNU General Public
              License.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Aclevo"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Repositories
              </a>
            </div>
          </div>
          <div className="w-full max-w-sm p-6 text-center">
            <StatList stats={stats} />
          </div>
        </div>
      </section>
      <div className="divider divider-primary">Public Members</div>
      <MemberList members={members} />
      <div className="divider divider-primary">Our Projects</div>
      <ProjectList projects={projects} />

      <section
        id="join"
        className="card border border-white/15 bg-base-100/25 shadow-xl backdrop-blur-xl"
      >
        <div className="card-body gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">
              Join the community and ship your first contribution this week
            </h3>
            <p className="max-w-2xl text-base-content/75">
              Pick a beginner-friendly issue, pair with a maintainer, and share
              updates in community calls. Everything is open, documented, and
              designed for async collaboration.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://discord.gg/C6QVUKnJRq" className="btn btn-primary">
              Join Discord
            </a>
            <a
              href="https://github.com/orgs/Aclevo/repositories"
              className="btn btn-secondary btn-soft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Good First Issues
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
