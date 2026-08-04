import React from 'react';
import BaseCard from './BaseCard';
import type { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <BaseCard
      title={feature.title}
      description={feature.description}
      image={feature.image}
      alt={feature.alt}
    />
  );
};

export default FeatureCard;