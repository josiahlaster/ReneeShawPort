import { useState } from 'react';
import { practice } from '../data/site.js';

const links = [
  { href: '#about', label: 'About' },
  { href: '#clinician', label: 'Clinician' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            MS
          </span>
          <span className="brand-text">
            <strong>Mind Smith</strong>
            <em>Consulting</em>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary btn-small nav-cta" onClick={() => setOpen(false)}>
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
