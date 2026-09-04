import { clinician, licenses, education, milestones } from '../data/site.js';

export default function Clinician() {
  return (
    <section id="clinician" className="clinician">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">Meet the clinician</p>
          <h2 className="section-title">{clinician.name}</h2>
          <p className="section-sub">{clinician.credentials} — {clinician.role}</p>
        </div>

        <div className="clinician-grid">
          <aside className="portrait-card">
            <span className="portrait-monogram" aria-hidden="true">
              {clinician.initials}
            </span>
            <h3>{clinician.name}</h3>
            <p className="portrait-role">{clinician.credentials}</p>
            <p className="portrait-role">{clinician.role}</p>
            <ul className="portrait-creds">
              <li>30+ years in behavioral health &amp; criminal justice</li>
              <li>Active North Carolina licenses</li>
              <li>Mental health court program leadership</li>
              <li>Clinical supervision across licensure pathways</li>
            </ul>
          </aside>

          <div className="clinician-main">
            {clinician.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="clinician-quote">
              <p>“{clinician.quote}”</p>
              <footer>— {clinician.name}</footer>
            </blockquote>
          </div>
        </div>

        <div className="cred-cards">
          <div className="cred-card">
            <h3>Licenses &amp; certifications</h3>
            <ul className="check-list">
              {licenses.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cred-card">
            <h3>Education</h3>
            <ul className="check-list">
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>
                  <span>{e.school} · {e.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cred-card">
            <h3>Career at a glance</h3>
            <ul className="check-list">
              {milestones.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
