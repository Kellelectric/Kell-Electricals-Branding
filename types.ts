import React from 'react';

export interface ColorSwatch {
  name: string;
  hex: string;
  variable: string;
  usage: string;
}

export interface BrandingSection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export enum BrandValues {
  PROFESSIONALISM = 'Professionalism',
  TRUST = 'Trust',
  INNOVATION = 'Innovation',
  SAFETY = 'Safety',
  RELIABILITY = 'Reliability'
}