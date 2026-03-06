import { config } from "../../../config";

const JoinSection = () => {
  return (
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
          <a href={config.org.discordUrl} className="btn btn-primary">
            Join Discord
          </a>
          <a
            href={`${config.org.githubUrl}/repositories`}
            className="btn btn-secondary btn-soft"
            target="_blank"
          >
            Open Good First Issues
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
