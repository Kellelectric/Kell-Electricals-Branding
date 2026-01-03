
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Download,
  Copy,
  ExternalLink,
  Smartphone,
  Truck,
  FileText
} from 'lucide-react';
import { BRAND_NAME, BRAND_COLORS, NAVIGATION_ITEMS, LOGO_CONCEPTS, SERVICES } from './constants';
import Logo from './components/Logo';
import BrandAssistant from './components/sections/BrandAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text} to clipboard!`);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-slate-900 text-white flex flex-col shrink-0 sticky top-0 h-auto md:h-screen z-50">
        <div className="p-6">
          <Logo variant="light" size="md" />
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeSection === item.id 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className={activeSection === item.id ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.title}</span>
              {activeSection === item.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-2xl p-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-semibold">Current Phase</p>
            <p className="text-xs text-slate-300 font-medium">Concept Release v1.0.4</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-slate-50 overflow-y-auto relative">
        {/* Header Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-b from-cyan-100/50 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-24">
          
          {/* Section: Vision */}
          <section id="vision" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'vision' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-widest border border-cyan-200">
                <ShieldCheck size={14} /> Brand Vision
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Engineering <span className="text-cyan-500">Excellence</span> through Precision.
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Kell Electricals Ltd isn't just a service provider; it's a partner in modern infrastructure. 
                We combine traditional technical mastery with forward-thinking smart technology to ensure safety, efficiency, and reliability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                {[
                  { title: "Technical Expertise", desc: "Rooted in engineering standards and safety protocols." },
                  { title: "Digital Innovation", desc: "Seamlessly integrating IoT, Solar, and Automation." },
                  { title: "Corporate Credibility", desc: "Structured for high-level enterprise contracting." }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-3">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Logo System */}
          <section id="logo" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'logo' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-heading font-bold text-slate-900">The Modern Grid</h2>
                  <p className="text-slate-500 max-w-xl">Our logo system is built on precision. Minimalist geometry reflects circuit paths, while the bold weight communicates industrial strength.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all">
                  <Download size={18} /> Asset Package (.SVG)
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {LOGO_CONCEPTS.map((concept, i) => (
                  <div key={i} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:border-cyan-200 transition-colors">
                    <div className="h-64 bg-slate-100 flex items-center justify-center p-12">
                      <div className="w-32 h-32 group-hover:scale-110 transition-transform duration-500">
                        {concept.svg}
                      </div>
                    </div>
                    <div className="p-8 space-y-2">
                      <h4 className="font-heading font-bold text-lg">{concept.name}</h4>
                      <p className="text-slate-500 text-sm">{concept.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-3xl p-12 flex flex-col items-center justify-center space-y-8">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Light Variation</p>
                <Logo variant="light" size="lg" />
              </div>
            </div>
          </section>

          {/* Section: Color Palette */}
          <section id="colors" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'colors' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-slate-900">Chromatic Precision</h2>
                <p className="text-slate-500 max-w-xl">A sophisticated palette that avoids industry clichés. Deep Navy provides the anchor of trust, Cyan injects modern energy, and Copper adds a conductive, material-driven accent.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BRAND_COLORS.map((color, i) => (
                  <div key={i} className="bg-white p-4 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col">
                    <div className={`h-40 w-full rounded-2xl mb-4 ${color.variable} shadow-inner flex items-center justify-center group cursor-pointer`} onClick={() => copyToClipboard(color.hex)}>
                      <div className="opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white transition-opacity">
                        <Copy size={20} />
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-heading font-bold text-slate-900">{color.name}</span>
                        <span className="font-mono text-xs font-semibold text-slate-400">{color.hex}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed italic">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Typography */}
          <section id="typography" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'typography' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-slate-900">The Editorial Tone</h2>
                <p className="text-slate-500 max-w-xl">Readable, geometric, and technical. Montserrat provides a commanding presence for headings, while Inter ensures maximum clarity for engineering specs.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-12 rounded-3xl border border-slate-200 space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Primary Heading</p>
                    <h3 className="text-4xl font-heading font-extrabold text-slate-900">Montserrat</h3>
                    <p className="text-slate-500 text-sm">A geometric sans-serif for high-impact corporate communication.</p>
                  </div>
                  <div className="flex gap-2 text-3xl font-heading font-black text-slate-900">
                    <span>Aa Bb Cc Dd Ee Ff Gg</span>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-3xl border border-slate-200 space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Body & Tech</p>
                    <h3 className="text-4xl font-mono font-medium text-slate-900">Inter / Mono</h3>
                    <p className="text-slate-500 text-sm">Optimized for technical documentation and screen readability.</p>
                  </div>
                  <div className="flex gap-2 text-2xl font-mono font-normal text-slate-900">
                    <span>{`{ technical_precision: true }`}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Mockups */}
          <section id="mockups" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'mockups' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-slate-900">Physical & Digital Impact</h2>
                <p className="text-slate-500 max-w-xl">Visualizing the Kell identity across key touchpoints. Designed for high visibility in both corporate offices and industrial sites.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Truck Wrap */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <Truck size={20} className="text-cyan-500" />
                    <span>Fleet Branding</span>
                  </div>
                  <div className="relative aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="https://picsum.photos/id/1071/800/450" alt="Van" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center p-12 bg-slate-900/10">
                       <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl scale-125 border border-slate-800 rotate-[-2deg]">
                          <Logo variant="light" size="md" />
                          <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4">
                             <div className="flex items-center gap-1 text-[8px] text-cyan-400 font-bold uppercase tracking-widest"><Zap size={8}/> Smart Solar</div>
                             <div className="flex items-center gap-1 text-[8px] text-cyan-400 font-bold uppercase tracking-widest"><ShieldCheck size={8}/> CCTV Systems</div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Interface */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <Smartphone size={20} className="text-cyan-500" />
                    <span>Client Application</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-64 h-[400px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 w-full p-6 space-y-6">
                          <Logo variant="light" size="sm" />
                          <div className="space-y-2">
                             <div className="h-2 w-12 bg-cyan-400 rounded-full" />
                             <h4 className="text-white font-heading font-bold text-xl">System Overview</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                             {[1,2,3,4].map(i => (
                               <div key={i} className="bg-slate-800 h-16 rounded-2xl border border-slate-700 flex items-center justify-center">
                                  <div className="w-6 h-1 bg-slate-600 rounded-full" />
                               </div>
                             ))}
                          </div>
                       </div>
                       <div className="absolute bottom-0 w-full p-4 bg-slate-800 border-t border-slate-700">
                          <div className="h-10 w-full bg-cyan-500 rounded-xl" />
                       </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Proposal */}
                <div className="space-y-6 col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 text-slate-900 font-bold">
                    <FileText size={20} className="text-cyan-500" />
                    <span>Service Proposals</span>
                  </div>
                  <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm space-y-12">
                    <div className="flex justify-between items-start">
                      <Logo size="md" />
                      <div className="text-right space-y-1 text-xs text-slate-400 font-mono">
                        <p>KELL ELECTRICALS LTD</p>
                        <p>REG: 2024/KELL-9981</p>
                        <p>WWW.KELLELECTRICALS.COM</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="h-12 w-2/3 bg-slate-100 rounded-xl" />
                      <div className="h-4 w-full bg-slate-50 rounded-full" />
                      <div className="h-4 w-5/6 bg-slate-50 rounded-full" />
                      <div className="h-4 w-4/6 bg-slate-50 rounded-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                       {SERVICES.map((s, i) => (
                         <div key={i} className="flex items-center gap-3 text-slate-600">
                           <div className="p-2 bg-slate-50 rounded-lg text-cyan-600">{s.icon}</div>
                           <span className="text-xs font-bold uppercase tracking-wide">{s.name}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Brand Assistant */}
          <section id="assistant" className={`scroll-mt-24 transition-opacity duration-500 ${activeSection === 'assistant' ? 'opacity-100' : 'hidden opacity-0'}`}>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-slate-900">Brand Intelligence</h2>
                <p className="text-slate-500 max-w-xl">Interact with our AI brand consultant to understand how to leverage this identity in your marketing, customer service, and technical communications.</p>
              </div>
              <BrandAssistant />
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 mt-24 py-12 px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo variant="minimal" size="sm" />
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-cyan-500 transition-colors">Safety Standards</a>
              <a href="#" className="hover:text-cyan-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-500 transition-colors">GCP Compliance</a>
            </div>
            <p className="text-xs text-slate-400">© 2024 Kell Electricals Ltd. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
