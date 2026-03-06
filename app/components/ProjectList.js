const ProjectList = ({ projects }) => {
  return (
    <section id="projects" className="grid gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.name}
          className="card border border-white/15 bg-base-100/25 shadow-lg backdrop-blur-xl"
        >
          <div className="card-body">
            <span className="badge badge-accent badge-soft w-fit">
              {project.status}
            </span>
            <h2 className="card-title text-xl">
              <a
                href={project.html_url}
                target="_blank"
                className="hover:text-primary"
              >
                {project.name}
              </a>
            </h2>
            <p className="text-base-content/80">{project.summary}</p>
            {project.language && (
              <div className="text-sm text-base-content/60">
                {project.language}
              </div>
            )}
            <div className="card-actions justify-end">
              <a
                href={project.html_url}
                className="btn btn-sm btn-ghost border border-white/20 bg-base-100/20"
                target="_blank"
              >
                View Repository
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProjectList;
