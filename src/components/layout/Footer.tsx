import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';
import { FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { onOpen } = useModal();
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h2>Ōkami</h2>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>{t('footer.links.title')}</h3>
              <ul>
                <li><Link to="/">{t('footer.links.home')}</Link></li>
                <li><Link to="/about">{t('footer.links.about')}</Link></li>
                <li><a href="#servicios" onClick={handleServicesClick}>{t('footer.links.services')}</a></li>
                <li><button type="button" style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }} onClick={onOpen}>{t('footer.links.contact')}</button></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>{t('footer.legal.title')}</h3>
              <ul>
                <li><Link to="/cookie-policy">{t('footer.legal.cookies')}</Link></li>
                <li><Link to="/privacy-policy">{t('footer.legal.privacy')}</Link></li>
                <li><Link to="/legal-notice">{t('footer.legal.terms')}</Link></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>{t('footer.social.title')}</h3>
              <div className={styles.socialIcons}>
                <a href="https://wa.me/34638467563?text=Hola%20Gracias%20por%20contactarnos,%20en%20qu%C3%A9%20podemos%20ayudarte" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="http://t.me/OkamiDigital" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
