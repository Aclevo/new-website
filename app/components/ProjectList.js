const ProjectList = ({ projects }) => {
  return (
    <section id="projects" className="grid gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <article key={project.name} className="card border border-white/15 bg-base-100/50 shadow-lg backdrop-blur-xl transition duration-[0.3s] hover:shadow-cyan-50">
          <div className="card-body">
            <div className="flex grid-flow-col gap-4">
              <span className="badge badge-primary badge-outline bg-base-100/20 text-white w-fit">{project.status}</span>
              {project.language && (
                <span className="badge badge-primary badge-outline bg-base-100/20 text-white w-fit">{project.language}</span>
              )}
            </div>
            <h2 className="card-title text-xl">{project.name}</h2>
            <p className="text-base-content/80">{project.summary}</p>
            <div className="card-actions justify-end">
              <a href={project.html_url} className="btn btn-sm btn-ghost border border-white/20 bg-base-100/20" target="_blank">View Repository</a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ProjectList;
