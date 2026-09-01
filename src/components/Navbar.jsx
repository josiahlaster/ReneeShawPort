import { profile } from '../data/resume.js';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education & Licensure'],
  ['development', 'Training'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">{profile.shortName}</span>
      <div className="navbar-links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
