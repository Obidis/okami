import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useModal } from '../../contexts/ModalContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { getAssetUrl } from '../../utils/assetHelper';

const Logo: React.FC = () => (
  <img
    src={getAssetUrl('/images/services/okami_logo.png')}
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById('servicios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('servicios');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
            <span className={styles.logoText}>Ōkami</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                {t('nav.home')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <a href="#servicios" className={styles.navLink} onClick={scrollToServices}>
                {t('nav.services')}
              </a>
            </li>
            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.navLink}
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                onClick={() => { onOpen(); setIsMenuOpen(false); }}
              >
                {t('nav.contact')}
              </button>
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

        {/* Mobile Menu Button */}
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
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.mobileMenuList}>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <a href="#servicios" onClick={scrollToServices}>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
                  onClick={() => { onOpen(); setIsMenuOpen(false); }}
                >
                  {t('nav.contact')}
                </button>
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
