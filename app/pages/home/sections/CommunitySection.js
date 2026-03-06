import { config } from "../../../config";
import StatList from "../../../components/StatList";

const CommunitySection = ({ stats }) => {
  return (
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
            {config.site.title} provides many different projects across various
            open source technologies and programming languages. We also build our
            own operating system based on Debian. Our repositories are open and
            accessible to anyone, licensed under the GNU General Public License.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={config.org.githubUrl}
              className="btn btn-primary"
              target="_blank"
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
  );
};

export default CommunitySection;
