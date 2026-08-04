import React from 'react';
import styles from './Hero.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';
import { getAssetUrl } from '../../utils/assetHelper';

const Hero: React.FC = () => {
  const { t, tArray } = useLanguage();
  const { onOpen } = useModal();
  const highlights = tArray('hero.highlights');

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>{t('hero.title')}</h1>
            <p className={styles.subtitle}>{t('hero.subtitle')}</p>
            <div className={styles.highlights}>
              {highlights.map((item: string, index: number) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.highlightDot}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div 
              className={styles.heroImage}
              style={{
                backgroundImage: `url(${getAssetUrl('/images/services/hero.webp')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <button type="button" className={styles.ctaButton} onClick={onOpen}>
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;