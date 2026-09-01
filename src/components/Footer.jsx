import { profile } from '../data/resume.js';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
    </footer>
  );
}
