import { useEffect, useState } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { ToastProvider, useToast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SECTION_IDS } from './utils/constants';
import { smoothScrollTo } from './utils/scroll';

/**
 * App root — composes providers + sections and wires global behaviors:
 * - Scroll spy (active nav section)
 * - ⌘K / Ctrl+K Command Palette
 * - Resume modal state
 */
function AppContent() {
  const [activeId, setActiveId] = useScrollSpy(SECTION_IDS, 70);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);
  const { toast } = useToast();

  // Global keyboard shortcut: Ctrl/Cmd + K → Command Palette
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // On mount, trigger a scroll event so scroll-spy updates immediately
  useEffect(() => {
    window.dispatchEvent(new Event('scroll'));
  }, []);

  // Reveal engine: nothing is stuck invisible — all sections start visible
  // and re-reveal on intersection as you scroll down.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -10px 0px' }
    );
    els.forEach((el) => {
      el.classList.add('visible');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const openContact = () => smoothScrollTo(document.getElementById('contact'), -14);

  return (
    <main id="main-content" className="min-h-screen bg-bgPrimary">
      <Navbar
        activeId={activeId}
        onOpenCommandPalette={() => setCmdPaletteOpen(true)}
        onCopyEmail={() => {
          navigator.clipboard.writeText('monikavnaidu@gmail.com');
          toast.show('Email copied to clipboard!', 'success');
        }}
      />
      <Hero onOpenResumeModal={() => setResumeOpen(true)} onOpenContact={openContact} />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <CommandPalette
        open={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
        onPrint={() => {
          setResumeOpen(true);
        }}
      />
    </main>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
