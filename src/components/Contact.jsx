import { practice } from '../data/site.js';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow on-dark">Contact</p>
            <h2 className="section-title on-dark">Begin the conversation</h2>
            <p>
              Whether you are seeking counseling for yourself, supervision as a counselor, or consultation for your
              program — reach out. All inquiries are confidential.
            </p>

            <ul className="contact-items">
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${practice.email}`}>{practice.email}</a>
              </li>
              <li>
                <span className="contact-label">Phone</span>
                <a href={practice.phoneHref}>{practice.phone}</a>
              </li>
              <li>
                <span className="contact-label">Location</span>
                <p>{practice.location} · By appointment</p>
              </li>
            </ul>
          </div>

          <aside className="contact-cta">
            <h3>Ready to reach out?</h3>
            <p>
              Send a note and we will find a time to talk. Tell us a little about yourself and what you are hoping
              for.
            </p>
            <a className="btn btn-cream" href={`mailto:${practice.email}?subject=New%20inquiry%20via%20website`}>
              Email {practice.email}
            </a>
            <p className="cta-small">Confidential · By appointment</p>
          </aside>
        </div>

        <p className="crisis-note">
          This practice is not an emergency service. If you are in crisis, call or text <a href="tel:988">988</a> (Suicide
          &amp; Crisis Lifeline) or call <a href="tel:911">911</a>.
        </p>
      </div>
    </section>
  );
}
