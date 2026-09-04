import { steps } from '../data/site.js';

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Care begins with a conversation</h2>
          <p className="section-sub">
            Whether you are seeking counseling, supervision, or consultation, the first step is the same — reaching out.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <article className="step" key={s.num}>
              <span className="step-num" aria-hidden="true">
                {s.num}
              </span>
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
            </article>
          ))}
        </div>

        <p className="approach-note">
          New clients are seen by appointment. Availability, fees, and what you are hoping for are discussed openly at
          first contact.
        </p>
      </div>
    </section>
  );
}
