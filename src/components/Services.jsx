import { services } from '../data/site.js';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head center">
          <p className="eyebrow">What we offer</p>
          <h2 className="section-title">Services</h2>
          <p className="section-sub">
            Counseling for clients. Supervision for clinicians. Consultation for the programs that serve them.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.num}>
              <span className="svc-num" aria-hidden="true">
                {s.num}
              </span>
              <h3>{s.title}</h3>
              <p className="svc-summary">{s.summary}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
