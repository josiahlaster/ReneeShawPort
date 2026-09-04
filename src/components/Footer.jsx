import { practice, clinician } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">
              MS
            </span>
            <div className="brand-text">
              <strong>Mind Smith</strong>
              <em>Consulting</em>
            </div>
            <p>
              Mental health counseling, substance use &amp; recovery services, clinical supervision, and behavioral
              health consulting in {practice.location}.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#clinician">The clinician</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#approach">How it works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Mental health counseling</li>
              <li>Substance use &amp; recovery</li>
              <li>Clinical supervision</li>
              <li>Behavioral health &amp; justice consulting</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${practice.email}`}>{practice.email}</a></li>
              <li><a href={`tel:${practice.phone.replace(/[^+\d]/g, '')}`}>{practice.phone}</a></li>
              <li>{practice.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mind Smith Consulting. All rights reserved.
          </p>
          <p>
            {clinician.name}, {clinician.credentials} · {practice.location}
          </p>
          <p className="footer-crisis">
            In crisis? Call or text <a href="tel:988">988</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
