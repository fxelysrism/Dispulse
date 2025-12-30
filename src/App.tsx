import Services from './pages/Services';
import Work from './pages/Work';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <spline-viewer url="https://prod.spline.design/hJKMelfycWC4hWys/scene.splinecode"></spline-viewer>

      <header className="navbar">
        <div className="navbar-container navbar-glow">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="Dispulse" className="logo-image" />
            <span className="logo-text">Dispulse</span>
          </div>

          <nav className="navbar-menu">
            <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
            <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
            <a onClick={() => scrollToSection('work')} className="nav-link">Work</a>
            <a onClick={() => scrollToSection('faq')} className="nav-link">FAQ</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </nav>

          <button className="btn-cta" onClick={() => scrollToSection('contact')}>Get in Touch</button>
        </div>
      </header>

      <div className="content-wrapper">
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title"></h1>
            <h2 className="hero-subtitle"></h2>
            <p className="hero-description"></p>
          </div>
        </section>

        <section id="services" className="content-section">
          <Services />
        </section>

        <section id="work" className="content-section">
          <Work />
        </section>

        <section id="faq" className="content-section">
          <FAQ />
        </section>

        <section id="contact" className="content-section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
