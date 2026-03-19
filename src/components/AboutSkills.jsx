export default function AboutSkills({ skills }) {
  return (
    <section className="info-grid">
      <article className="panel">
        <p className="eyebrow">About</p>
        <p>
          A simple reading flow with just enough structure to feel polished
          without becoming heavy.
        </p>
      </article>

      <article className="panel">
        <p className="eyebrow">Skills</p>
        <div className="tag-row">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    </section>
  )
}
