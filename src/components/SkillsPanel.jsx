export default function SkillsPanel({ skills }) {
  return (
    <section className="simple-section">
      <h2>Skills</h2>
      <div className="tag-row">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}
