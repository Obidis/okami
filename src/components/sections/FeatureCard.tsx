import React, { useState } from 'react';
import styles from './BaseCard.module.scss';
import type { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          src={feature.image}
          alt={feature.alt}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{feature.title}</h3>
        <p className={styles.description}>{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;