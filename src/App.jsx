import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Clinician from './components/Clinician.jsx';
import Services from './components/Services.jsx';
import Approach from './components/Approach.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Clinician />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
