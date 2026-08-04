import React, { useState } from 'react';
import styles from './BaseCard.module.scss';

export interface BaseCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({ title, description, image, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default BaseCard;
