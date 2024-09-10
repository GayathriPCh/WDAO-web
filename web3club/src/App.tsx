import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EventsCalendar from './pages/EventsCalendar';
import ProjectShowcase from './pages/ProjectShowcase';
import News from './pages/News';
import MintNFT from './pages/MintNFT';
import Reviews from './pages/Reviews';
import Digiboard from './pages/Digiboard';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, ResolvedRegister } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

// RainbowKit and Wagmi config
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  syncConnectedChain: true,
  ssr: true,
});
const queryClient = new QueryClient();

// Main App component
const App = () => {
  return (
    <WagmiProvider config={config as unknown as ResolvedRegister['config']}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <div>
              {/* Responsive Navbar */}
              <NavigationBar />
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/events-calendar" element={<EventsCalendar />} />
                <Route path="/project-showcase" element={<ProjectShowcase />} />
                <Route path="/news" element={<News />} />
                <Route path="/mint-nft" element={<MintNFT />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/digiboard" element={<Digiboard />} />
              </Routes>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
