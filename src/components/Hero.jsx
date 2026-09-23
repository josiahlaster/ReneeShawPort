import { practice } from '../data/site.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">{practice.location} · Counseling · Recovery · Supervision · Consulting</p>
          <h1 className="hero-title">
            Mending minds.
            <br />
            <em>Restoring lives.</em>
          </h1>
          <p className="hero-lede">
            A behavioral health practice supporting children, adolescents, and adults navigating mental health
            challenges, substance use, and the road back from justice involvement — with care that treats the whole
            person.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">
              Start the conversation
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore services
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <img
            src="/hero-lockup.png"
            alt="Mindsmith Consulting"
            width="500"
            height="500"
            loading="eager"
          />
        </aside>
      </div>

      <div className="crisis-strip">
        <p>
          <strong>In crisis?</strong> Help is available — call or text <a href="tel:988">988</a> (Suicide &amp; Crisis
          Lifeline) or call <a href="tel:911">911</a>.
        </p>
      </div>
    </section>
  );
}
