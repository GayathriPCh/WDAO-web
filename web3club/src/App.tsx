import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EventsCalendar from './pages/EventsCalendar';
import ProjectShowcase from './pages/ProjectShowcase';
import News from './pages/News';
import MintNFT from './pages/MintNFT';
import AboutUs from './pages/AboutUs';
import Digiboard from './pages/Digiboard';
import NavigationBar from './components/NavigationBar';
import StressTest from './pages/Stresstest';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, ResolvedRegister } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css'; // Import your CSS file
import './index.css'; // Import global CSS

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  syncConnectedChain: true,
  ssr: true,
});
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiProvider config={config as unknown as ResolvedRegister['config']}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <div>
              <NavigationBar />
              <div className="page-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/events-calendar" element={<EventsCalendar />} />
                  <Route path="/project-showcase" element={<ProjectShowcase />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/mint-nft" element={<MintNFT />} />
                  <Route path="/reviews" element={<AboutUs />} />
                  <Route path="/digiboard" element={<Digiboard />} />
                  <Route path="/stress-test" element={<StressTest />} />
                </Routes>
              </div>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
