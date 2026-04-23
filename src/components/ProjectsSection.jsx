import { useState } from 'react'

function renderBoldText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return part
  })
}

function ProjectItem({ project, activeIndex, projectCount }) {
  return (
    <article className="project-entry" aria-live="polite">
      {project.image ? (
        <img
          className="project-entry__image"
          src={project.image}
          alt={`${project.name} preview`}
        />
      ) : null}
      <div className="project-entry__content">
        <p className="project-entry__count">
          Project {activeIndex + 1} of {projectCount}
        </p>
        <div className="project-entry__head">
          <a
            href={project.link || '#projects'}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noreferrer' : undefined}
          >
            {project.name}
          </a>
          <span>{project.type}</span>
        </div>
        {project.position ? (
          <p className="project-entry__position">
            <strong>{project.position}</strong>
          </p>
        ) : null}
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
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  const goToProject = (direction) => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction

      if (nextIndex < 0) {
        return projects.length - 1
      }

      if (nextIndex >= projects.length) {
        return 0
      }

      return nextIndex
    })
  }

  return (
    <section className="simple-section" id="projects">
      <div className="project-panel__header">
        <h2>Projects</h2>
        <div className="project-carousel__controls" aria-label="Project carousel controls">
          <button type="button" onClick={() => goToProject(-1)} aria-label="Show previous project">
            Prev
          </button>
          <button type="button" onClick={() => goToProject(1)} aria-label="Show next project">
            Next
          </button>
        </div>
      </div>

      <div className="project-carousel">
        <ProjectItem
          project={activeProject}
          activeIndex={activeIndex}
          projectCount={projects.length}
        />

        <div className="project-carousel__dots" aria-label="Select project">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.name}
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
