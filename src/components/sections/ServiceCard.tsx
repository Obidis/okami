import React, { useState } from 'react';
import styles from './BaseCard.module.scss';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          src={service.image}
          alt={service.alt}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;