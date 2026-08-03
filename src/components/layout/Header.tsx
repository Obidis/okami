import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useModal } from '../../contexts/ModalContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Logo: React.FC = () => (
  <img
    src="/images/services/okami_logo.png"
    alt="Ōkami Logo"
    className={styles.logoImg}
  />
);

const Header: React.FC = () => {
  const { t, setLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { onOpen } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // If on home page, scroll to section; otherwise navigate to home with hash
    if (window.location.pathname === '/') {
      const element = document.getElementById('servicios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = '/#servicios';
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink}>
            <Logo />
            <span className={styles.logoText}>Ōkami</span>
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                {t('nav.home')}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/#servicios" className={styles.navLink} onClick={scrollToServices}>
                {t('nav.services')}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink} onClick={(e) => { e.preventDefault(); onOpen(); setIsMenuOpen(false); }}>
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.controls}>
          <button
            className={styles.langButton}
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
          >
            {language === 'es' ? '🇪🇸' : '🇬🇧'}
          </button>
          <button
            className={styles.themeButton}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Menu Button - inside container for proper alignment */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}>
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              <li>
                <a href="/" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/#servicios" onClick={scrollToServices}>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onOpen(); setIsMenuOpen(false); }}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
            <div className={styles.mobileMenuControls}>
              <button
                className={styles.langButton}
                onClick={() => {
                  setLanguage(language === 'es' ? 'en' : 'es');
                  setIsMenuOpen(false);
                }}
                aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
              >
                {language === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}
              </button>
              <button
                className={styles.themeButton}
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
                {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
