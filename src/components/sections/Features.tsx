import React from 'react';
import styles from './Features.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';
import FeatureCard from './FeatureCard';
import type { FeatureItem } from '../../types';

const Features: React.FC = () => {
  const { t, tObject } = useLanguage();
  const features = tObject<{ items: FeatureItem[] }>('features').items;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('features.title')}</h2>
        <div className={styles.cards}>
          {features.map((feature: FeatureItem, index: number) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;