import { profile, attributes } from '../data/resume.js';

export default function About() {
  return (
    <section className="section" id="about">
      <h2>About</h2>
      <p className="lead">{profile.summary}</p>
      <p className="lead">{profile.tagline}</p>
      <div className="chip-row">
        {attributes.map((a) => (
          <span key={a} className="chip">{a}</span>
        ))}
      </div>
    </section>
  );
}
