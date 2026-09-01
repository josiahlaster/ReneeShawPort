import { profile, attributes, education, licenses, experience, development } from './data/resume.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Education from './components/Education.jsx';
import Development from './components/Development.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Education />
        <Development />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
