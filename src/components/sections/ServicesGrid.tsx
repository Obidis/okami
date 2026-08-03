import React from 'react';
import styles from './ServicesGrid.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import ServiceCard from './ServiceCard';
import type { ServiceItem } from '../../types';

const ServicesGrid: React.FC = () => {
  const { t, tObject } = useLanguage();
  const services = tObject<{ items: ServiceItem[] }>('services').items;

  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('services.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('services.subtitle')}</p>
        </header>
        <div className={styles.grid}>
          {services.map((service: ServiceItem, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;