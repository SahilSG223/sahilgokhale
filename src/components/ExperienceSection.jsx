function renderBoldText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return part
  })
}

function ExperienceItem({ item }) {
  return (
    <article className="timeline-row">
      {item.logoSrc ? (
        <div className="timeline-row__logo-wrap" aria-hidden="true">
          <img className="timeline-row__logo" src={item.logoSrc} alt={item.logoAlt} />
        </div>
      ) : (
        <div className="timeline-row__mark" aria-hidden="true">
          {item.wordmark ?? item.org.slice(0, 1)}
        </div>
      )}
      <div className="timeline-row__content">
        <div className="timeline-row__head">
          <div>
            <h3>{item.org}</h3>
            <p className="timeline-row__role">{item.role}</p>
          </div>
          <span>{item.period}</span>
        </div>
        <p className="timeline-row__summary">{renderBoldText(item.summary)}</p>
      </div>
    </article>
  )
}

export default function ExperienceSection({ experiences }) {
  return (
    <section className="simple-section" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <ExperienceItem key={`${item.org}-${item.role}`} item={item} />
        ))}
      </div>
    </section>
  )
}
