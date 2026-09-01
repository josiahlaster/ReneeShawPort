import { development } from '../data/resume.js';

export default function Development() {
  return (
    <section className="section" id="development">
      <h2>Professional Development</h2>
      <div className="chip-row">
        {development.map((d) => (
          <span key={d} className="chip">{d}</span>
        ))}
      </div>
    </section>
  );
}
