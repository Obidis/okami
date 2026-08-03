import React, { useState } from 'react';
import styles from './AboutPage.module.scss';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

interface AboutData {
  title: string;
  subtitle: string;
  description: string[];
  workflow: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
}

const AboutPage: React.FC = () => {
  const { tObject, t } = useLanguage();
  const { onOpen } = useModal();
  const about = tObject<AboutData>('about');
  const workflow = about.workflow;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{about.title}</h1>
          <p className={styles.sectionSubtitle}>{about.subtitle}</p>
        </header>

        <div className={styles.mainGrid}>
          <div className={styles.imageWrapper}>
            <img
              className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
              src="/images/services/nosotros.webp"
              alt="Equipo Ōkami trabajando en proyecto digital"
              loading="lazy"
              decoding="async"
              width="600"
              height="450"
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className={styles.textContent}>
            <div className={styles.description}>
              {about.description.map((paragraph: string, index: number) => (
                <p key={index} className={styles.paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.workflow}>
            <header className={styles.workflowHeader}>
              <h2 className={styles.workflowTitle}>{workflow.title}</h2>
              <p className={styles.workflowSubtitle}>{workflow.subtitle}</p>
            </header>
            <div className={styles.workflowSteps}>
              {workflow.steps.map((step, index: number) => (
                <div key={index} className={styles.workflowStep}>
                  <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <button type="button" className={styles.ctaButton} onClick={onOpen}>
            {t('nav.contact')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;