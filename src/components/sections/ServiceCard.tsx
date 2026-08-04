import React from 'react';
import BaseCard from './BaseCard';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <BaseCard
      title={service.title}
      description={service.description}
      image={service.image}
      alt={service.alt}
    />
  );
};

export default ServiceCard;