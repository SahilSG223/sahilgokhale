function renderBoldText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return part
  })
}

function ProjectItem({ project }) {
  return (
    <article className="project-entry">
      {project.image ? (
        <img
          className="project-entry__image"
          src={project.image}
          alt={`${project.name} preview`}
        />
      ) : null}
      <div className="project-entry__content">
        <div className="project-entry__head">
          <a href="#projects">{project.name}</a>
          <span>{project.type}</span>
        </div>
        {project.award ? (
          <p className="project-entry__award">{renderBoldText(project.award)}</p>
        ) : null}
        <p>{renderBoldText(project.description)}</p>
        <p className="project-entry__meta">
          {renderBoldText(`**Stack:** ${project.stack}`)}
        </p>
        <p className="project-entry__meta">
          {renderBoldText(`**Impact:** ${project.impact}`)}
        </p>
      </div>
    </article>
  )
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="simple-section" id="projects">
      <div className="project-panel__header">
        <h2>Projects</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
