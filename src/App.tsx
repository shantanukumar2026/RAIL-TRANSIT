import { useState } from 'react';
import './index.css';

import TopContactBar from './components/TopContactBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyIntro from './components/CompanyIntro';
import FeaturedComponents from './components/FeaturedComponents';
import ProductShowcaseStrip from './components/ProductShowcaseStrip';
import RailwayTelemetryWidget from './components/RailwayTelemetryWidget';
import ManufacturingCapabilities from './components/ManufacturingCapabilities';
import SolidificationCalculator from './components/SolidificationCalculator';
import ManufacturingProcess from './components/ManufacturingProcess';
import IndustriesWeServe from './components/IndustriesWeServe';
import FactoryOverview from './components/FactoryOverview';
import EngineeringExcellence from './components/EngineeringExcellence';
import StandardsGrid from './components/StandardsGrid';
import TestingFacilities from './components/TestingFacilities';
import AuthoritiesApprovals from './components/AuthoritiesApprovals';
import NewsInsights from './components/NewsInsights';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

import RequestQuoteModal from './components/RequestQuoteModal';
import WatchVideoModal from './components/WatchVideoModal';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  const handleOpenVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', color: '#1F2937' }}>
      
      {/* 01 Top Contact Bar */}
      <TopContactBar />

      {/* 02 Main Navigation & 03 Mega Menu */}
      <Header onRequestQuoteClick={handleOpenQuote} />

      <main id="main-content">
        {/* 04 Full Screen Hero Section */}
        <HeroSection 
          onExploreClick={() => {
            const el = document.getElementById('capabilities');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onWatchVideoClick={handleOpenVideo}
        />

        {/* 05 Company Introduction */}
        <CompanyIntro />

        {/* 06 Featured Rail Components (All 15 Products) */}
        <FeaturedComponents />

        {/* 07 Isolated Metal Castings Showcase Strip (Matching User Screenshot) */}
        <ProductShowcaseStrip />

        {/* 08 Live Interactive Railway Telemetry & Speed Monitor */}
        <RailwayTelemetryWidget />

        {/* 09 Manufacturing Capabilities */}
        <ManufacturingCapabilities />

        {/* 10 Interactive Solidification & Metallurgy Calculator */}
        <SolidificationCalculator />

        {/* 11 Manufacturing Process Timeline */}
        <ManufacturingProcess />

        {/* 12 Railway Sectors We Serve */}
        <IndustriesWeServe />

        {/* 13 Factory Section with Stats Overlay */}
        <FactoryOverview />

        {/* 14 Engineering Excellence */}
        <EngineeringExcellence />

        {/* 15 International Standards & Wheelsets Showcase */}
        <StandardsGrid />

        {/* 16 In-House Testing Facilities */}
        <TestingFacilities />

        {/* 17 Authorities & Approvals */}
        <AuthoritiesApprovals />

        {/* 18 News & Insights */}
        <NewsInsights />

        {/* 19 CTA Banner */}
        <CtaBanner onRequestQuoteClick={handleOpenQuote} />
      </main>

      {/* 20 Corporate Mega Footer & Bottom Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
      <WatchVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />

    </div>
  );
}

export default App;
