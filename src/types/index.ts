export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface TranslationValue {
  [key: string]: TranslationValue | string | string[] | number | boolean | object;
}

export type Language = 'es' | 'en';

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface Workflow {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string[];
  workflow: Workflow;
}