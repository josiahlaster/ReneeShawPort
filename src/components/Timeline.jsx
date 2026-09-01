import { experience } from '../data/resume.js';

export default function Timeline() {
  return (
    <section className="section" id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.period + job.role} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="timeline-org">{job.org} · {job.place}</p>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
