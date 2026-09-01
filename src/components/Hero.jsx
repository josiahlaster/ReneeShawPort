import { profile } from '../data/resume.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-eyebrow">{profile.location}</p>
      <h1>{profile.name}</h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-subtitle">{profile.subtitle}</p>
      <blockquote className="hero-tagline">“{profile.tagline}”</blockquote>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="#experience">View experience</a>
        <a className="btn btn-outline" href="#contact">Contact</a>
      </div>
    </section>
  );
}
