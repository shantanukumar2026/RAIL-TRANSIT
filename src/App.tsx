import { useState, useEffect } from 'react';
import './index.css';
import { translations } from './translations';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyIntro from './components/CompanyIntro';
import ManufacturingExcellence from './components/ManufacturingExcellence';
import ProductsSection from './components/ProductsSection';
import SpecialtyMixesSection from './components/SpecialtyMixesSection';
import MarketsSection from './components/MarketsSection';
import EsgSustainability from './components/EsgSustainability';
import FeaturedProjects from './components/FeaturedProjects';
import { InnovationSection } from './components/InnovationSection';
import LogisticsCoverage from './components/LogisticsCoverage';
import FleetOperations from './components/FleetOperations';
import DigitalSolutions from './components/DigitalSolutions';
import SafetyStandards from './components/SafetyStandards';
import KnowledgeCenter from './components/KnowledgeCenter';
import Footer from './components/Footer';
import type { MegaMenuTab } from './types';

function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuTab>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  // Gallery Filter State
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'commercial' | 'infrastructure' | 'industrial'>('all');

  // Logistics Dispatch States
  const [activeHub, setActiveHub] = useState<'houston' | 'chicago' | 'denver' | 'dallas'>('houston');

  // ESG Sustainability States
  const [clinkerRatio, setClinkerRatio] = useState(30);
  const [esgVolumeVal] = useState('100');

  const t = translations[lang];

  const galleryProjects = [
    {
      title: lang === 'en' ? 'Amtrak High-Speed Corridor Turnout Frogs' : 'Desvíos para Corredor de Alta Velocidad Amtrak',
      loc: 'Philadelphia, Pennsylvania',
      vol: '1,200 Turnout Sets',
      category: 'infrastructure',
      img: '/images/rail_infrastructure_casting.png'
    },
    {
      title: lang === 'en' ? 'NYC MTA Subway Bogie Side Frames & Axles' : 'Bastidores y Ejes de Bogie para Metro MTA de Nueva York',
      loc: 'New York City, NY',
      vol: '4,500 Forged Axles',
      category: 'industrial',
      img: '/images/rail_forged_axles_2.png'
    },
    {
      title: lang === 'en' ? 'BNSF Heavy Freight Line Rail Fastenings' : 'Fijaciones de Vía para Línea de Carga Pesada BNSF',
      loc: 'Chicago, Illinois',
      vol: '180,000 Tie Plates',
      category: 'commercial',
      img: '/images/rail_trackwork_mfg.png'
    },
    {
      title: lang === 'en' ? 'Chicago Metra Catenary & OHL Hardware' : 'Herrajes para Catenaria Metra de Chicago',
      loc: 'Chicago, Illinois',
      vol: '12,000 Catenary Arms',
      category: 'infrastructure',
      img: '/images/rail_catenary_hardware.png'
    },
    {
      title: lang === 'en' ? 'Union Pacific Intermodal Crossing Diamonds' : 'Cruzamientos de Manganeso Intermodales Union Pacific',
      loc: 'Dallas, Texas',
      vol: '850 Manganese Frogs',
      category: 'commercial',
      img: '/images/rail_castings_foundry_1.png'
    },
    {
      title: lang === 'en' ? 'BART Rapid Transit Third Rail Insulator Supports' : 'Soportes de Aisladores de Tercer Riel para BART',
      loc: 'San Francisco, California',
      vol: '25,000 Support Units',
      category: 'industrial',
      img: '/images/rail_forging_press.png'
    }
  ];

  const filteredProjects = galleryFilter === 'all'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === galleryFilter);

  const logisticsHubData = {
    houston: {
      name: lang === 'en' ? 'ABC FOUNDRIES East Coast Hub' : 'Centro Este de ABC FOUNDRIES',
      activeMixers: 42,
      yardsLoaded: '8,400 Tons',
      transitTime: '24 hrs dispatch',
      status: lang === 'en' ? 'Optimal Flow' : 'Flujo Óptimo'
    },
    chicago: {
      name: lang === 'en' ? 'Chicago Rail Forging & CNC Center' : 'Centro de Forja y CNC Ferroviario de Chicago',
      activeMixers: 35,
      yardsLoaded: '6,900 Tons',
      transitTime: '12 hrs dispatch',
      status: lang === 'en' ? 'Optimal Flow' : 'Flujo Óptimo'
    },
    denver: {
      name: lang === 'en' ? 'Canada Foundries Division' : 'División Canada Foundries',
      activeMixers: 28,
      yardsLoaded: '5,100 Tons',
      transitTime: '36 hrs dispatch',
      status: lang === 'en' ? 'High Demand' : 'Demanda Alta'
    },
    dallas: {
      name: lang === 'en' ? 'ABC Forge Southern Depot' : 'Depósito Sur de ABC Forge',
      activeMixers: 48,
      yardsLoaded: '9,800 Tons',
      transitTime: '18 hrs dispatch',
      status: lang === 'en' ? 'Optimal Flow' : 'Flujo Óptimo'
    }
  };


  return (
    <>
      <Header
        lang={lang}
        setLang={setLang}
        activeMegaMenu={activeMegaMenu}
        setActiveMegaMenu={setActiveMegaMenu}
        t={t}
      />
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection lang={lang} t={t} />

        {/* 2. Corporate Overview */}
        <CompanyIntro lang={lang} />

        {/* 3. Manufacturing Ecosystem */}
        <ManufacturingExcellence lang={lang} />

        {/* 4. Product Portfolio */}
        <ProductsSection lang={lang} />
        <SpecialtyMixesSection />

        {/* 5. Markets We Serve */}
        <MarketsSection />



        {/* 7. Sustainability & Environmental Performance */}
        <EsgSustainability
          clinkerRatio={clinkerRatio}
          setClinkerRatio={setClinkerRatio}
          esgVolumeVal={esgVolumeVal}
        />

        {/* 8. Selected Landmark Projects */}
        <FeaturedProjects
          galleryFilter={galleryFilter}
          setGalleryFilter={setGalleryFilter}
          filteredProjects={filteredProjects}
        />

        {/* 9. Research & Material Innovation */}
        <InnovationSection lang={lang} />

        {/* 10. Logistics & Fleet Operations */}
        <LogisticsCoverage
          logisticsHubData={logisticsHubData}
          activeHub={activeHub}
          setActiveHub={setActiveHub}
        />
        <FleetOperations />

        {/* 11. Digital Systems & Safety Standards */}
        <DigitalSolutions lang={lang} />
        <SafetyStandards lang={lang} />

        {/* 12. Knowledge Center */}
        <KnowledgeCenter />
      </main>

      {/* 14. Global Corporate Footer */}
        <Footer />
    </>
  );
}

export default App;
