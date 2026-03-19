export default function ContactSection({ links }) {
  return (
    <section className="simple-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-list">
        {links.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.iconSrc ? (
              <img
                className={`contact-icon-image ${
                  link.label === 'GitHub' ? 'contact-icon-image--github' : ''
                }`}
                src={link.iconSrc}
                alt={link.iconAlt}
              />
            ) : (
              <span className="contact-icon" aria-hidden="true">
                {link.icon}
              </span>
            )}
            <span className="contact-text">
              <strong>{link.label}</strong>
              <span>{link.value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
