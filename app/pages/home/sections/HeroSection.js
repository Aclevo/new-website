const HeroSection = ({ topProject }) => {
  return (
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
            >
              View Repository
            </a>
            <a
              href="https://github.com/orgs/Aclevo/LBNets/issues/new"
              className="btn btn-ghost border border-white/20 bg-base-100/20"
              target="_blank"
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
  );
};

export default HeroSection;
