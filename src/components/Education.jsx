import { education, licenses } from '../data/resume.js';

export default function Education() {
  return (
    <section className="section" id="education">
      <h2>Education &amp; Licensure</h2>
      <div className="card-grid">
        {education.map((e) => (
          <div key={e.degree} className="card">
            <h3>{e.degree}</h3>
            <p className="card-sub">{e.school} · {e.place}</p>
            <p className="card-date">{e.date}</p>
          </div>
        ))}
        {licenses.map((l) => (
          <div key={l.name} className="card card-license">
            <h3>{l.name}</h3>
            <p className="card-sub">{l.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
