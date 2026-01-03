
import React from 'react';
import { Shield, Zap, Cpu, Settings, Sun, Eye, Layers, Palette, Type, Smartphone, Truck } from 'lucide-react';
import { ColorSwatch, BrandingSection } from './types';

export const BRAND_NAME = "Kell Electricals Ltd";

export const BRAND_COLORS: ColorSwatch[] = [
  { 
    name: "Deep Midnight", 
    hex: "#0F172A", 
    variable: "bg-slate-900", 
    usage: "Primary Background, High-end Corporate Identity" 
  },
  { 
    name: "Electric Cyan", 
    hex: "#22D3EE", 
    variable: "bg-cyan-400", 
    usage: "Core Energy Accent, Innovation, Technology" 
  },
  { 
    name: "Conductive Copper", 
    hex: "#B45309", 
    variable: "bg-amber-700", 
    usage: "Premium Industrial Accent, Grounding, Materiality" 
  },
  { 
    name: "Safety Slate", 
    hex: "#475569", 
    variable: "bg-slate-600", 
    usage: "Secondary Text, UI Surfaces, Technical Documents" 
  },
  { 
    name: "Clean Current", 
    hex: "#F8FAFC", 
    variable: "bg-slate-50", 
    usage: "Neutral Surfaces, Readability, Professional Balance" 
  }
];

export const NAVIGATION_ITEMS: BrandingSection[] = [
  { id: 'vision', title: 'Brand Vision', icon: <Eye size={20} /> },
  { id: 'logo', title: 'Logo System', icon: <Layers size={20} /> },
  { id: 'colors', title: 'Color Palette', icon: <Palette size={20} /> },
  { id: 'typography', title: 'Typography', icon: <Type size={20} /> },
  { id: 'mockups', title: 'Visual Mockups', icon: <Smartphone size={20} /> },
  { id: 'assistant', title: 'Brand Assistant', icon: <Cpu size={20} /> }
];

export const SERVICES = [
  { name: "Electrical Repairs", icon: <Settings size={18} /> },
  { name: "Smart Home Automation", icon: <Smartphone size={18} /> },
  { name: "Solar Solutions", icon: <Sun size={18} /> },
  { name: "CCTV & Security", icon: <Shield size={18} /> },
  { name: "Contracting", icon: <Zap size={18} /> }
];

export const LOGO_CONCEPTS = [
  {
    name: "The Pulse K",
    description: "A geometric 'K' formed by circuit paths, symbolizing interconnected systems and energy flow.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 fill-none stroke-current stroke-[6]" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 20 V80" />
        <path d="M30 50 L70 20" />
        <path d="M30 50 L70 80" />
        <circle cx="70" cy="20" r="4" fill="currentColor" />
        <circle cx="70" cy="80" r="4" fill="currentColor" />
        <path d="M45 38 L55 38" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    name: "The Circuit Shield",
    description: "A hexagonal shield representing safety and structural integrity, with integrated power line motifs.",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-none stroke-current stroke-[5]" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 10 L85 28 V72 L50 90 L15 72 V28 Z" />
        <path d="M50 30 V70" stroke="#B45309" strokeWidth="8" />
        <path d="M35 45 H65" stroke="#22D3EE" strokeWidth="4" />
        <path d="M35 55 H65" stroke="#22D3EE" strokeWidth="4" />
      </svg>
    )
  }
];
