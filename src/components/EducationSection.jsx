import waterlooSeal from '../assets/University_of_Waterloo_seal.svg'

export default function EducationSection() {
  return (
    <section className="simple-section" id="education">
      <h2>Education</h2>
      <p className="section-lead education-lead">
        <span className="timeline-row__logo-wrap" aria-hidden="true">
          <img
            className="timeline-row__logo education-seal"
            src={waterlooSeal}
            alt="University of Waterloo seal"
          />
        </span>
        <span>University of Waterloo</span>
      </p>
      <p className="section-copy">
        Honours Bachelor of Mathematics, Expected May 2029.
      </p>
    </section>
  )
}
