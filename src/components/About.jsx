import { practiceAbout, commitments, focus } from '../data/site.js';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="eyebrow">About the practice</p>
            <h2 className="section-title">Whole-person care, held to a steady standard</h2>
            {practiceAbout.map((p, i) => (
              <p className={i === 0 ? 'lead' : undefined} key={i}>
                {p}
              </p>
            ))}

            <div className="focus-block">
              <h3>Who we walk with</h3>
              <ul className="focus-chips">
                {focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="commit-card">
            <span className="eyebrow">What we hold to</span>
            <ul className="commit-list">
              {commitments.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <p>{c.detail}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
