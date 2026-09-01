import { profile } from '../data/resume.js';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div className="card-grid">
        <div className="card"><h3>Location</h3><p className="card-sub">{profile.address}</p></div>
        <div className="card"><h3>Phone</h3><p className="card-sub">{profile.phone}</p></div>
        <div className="card"><h3>Email</h3><p className="card-sub">{profile.email}</p></div>
      </div>
    </section>
  );
}
