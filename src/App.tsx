import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { IggyChatbot } from './components/IggyChatbot';

// Lazy loading heavy sections for performance optimization
const CityMapSection = React.lazy(() => import('./sections/CityMapSection').then(m => ({ default: m.CityMapSection })));
const TracksSection = React.lazy(() => import('./sections/TracksSection').then(m => ({ default: m.TracksSection })));
const MissionLogs = React.lazy(() => import('./sections/MissionLogs').then(m => ({ default: m.MissionLogs })));
const AmbassadorSection = React.lazy(() => import('./sections/AmbassadorSection').then(m => ({ default: m.AmbassadorSection })));
const LeaderboardSection = React.lazy(() => import('./sections/LeaderboardSection').then(m => ({ default: m.LeaderboardSection })));
const JoinSquadSection = React.lazy(() => import('./sections/JoinSquadSection').then(m => ({ default: m.JoinSquadSection })));
const PowerUpsSection = React.lazy(() => import('./sections/PowerUpsSection').then(m => ({ default: m.PowerUpsSection })));
const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const SponsorsSection = React.lazy(() => import('./sections/SponsorsSection').then(m => ({ default: m.SponsorsSection })));
const FAQSection = React.lazy(() => import('./sections/FAQSection').then(m => ({ default: m.FAQSection })));
const Footer = React.lazy(() => import('./sections/Footer').then(m => ({ default: m.Footer })));

// Legal pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const CodeOfConduct = React.lazy(() => import('./pages/CodeOfConduct').then(m => ({ default: m.CodeOfConduct })));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer').then(m => ({ default: m.Disclaimer })));
const Accessibility = React.lazy(() => import('./pages/Accessibility').then(m => ({ default: m.Accessibility })));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const FAQPage = React.lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const ZonalDetails = React.lazy(() => import('./pages/ZonalDetails').then(m => ({ default: m.ZonalDetails })));

// Loading fallback for Suspense
const SectionLoader = () => (
  <div className="w-full py-24 flex justify-center items-center bg-surface">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
  </div>
);

const HomePage = () => (
  <div className="font-body text-on-background bg-background selection:bg-primary selection:text-on-primary">
    <Navbar />
    <main className="scanlines">
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <CityMapSection />
        <TracksSection />
        <MissionLogs />
        <AmbassadorSection />
        <LeaderboardSection />
        <JoinSquadSection />
        <PowerUpsSection />
        <TestimonialsSection />
        <SponsorsSection />
        <FAQSection />
      </Suspense>
    </main>
    
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
    <IggyChatbot />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SectionLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/zonals/:cityId" element={<ZonalDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
