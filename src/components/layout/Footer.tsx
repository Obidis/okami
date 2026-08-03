import React from 'react';
import styles from './Footer.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';
import { FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { onOpen } = useModal();
  const currentYear = new Date().getFullYear();

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
                <li><a href="/">{t('footer.links.home')}</a></li>
                <li><a href="/about">{t('footer.links.about')}</a></li>
                <li><a href="/#servicios">{t('footer.links.services')}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpen(); }}>{t('footer.links.contact')}</a></li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3>{t('footer.legal.title')}</h3>
              <ul>
                <li><a href="/cookie-policy">{t('footer.legal.cookies')}</a></li>
                <li><a href="/privacy-policy">{t('footer.legal.privacy')}</a></li>
                <li><a href="/legal-notice">{t('footer.legal.terms')}</a></li>
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
