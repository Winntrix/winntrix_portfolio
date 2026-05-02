import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollTop from './components/ScrollTop';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Services from './components/Services';
import GenerativeAi from './pages/ai_integration/GenerativeAiDevelopment';
import LLMDevelopment from './pages/ai_integration/LLMdevelopment';
import GenerativeAiIntegration from './pages/ai_integration/GenerativeAiIntegration';
import ChatGPTIntegration from './pages/ai_integration/ChatGPTintegartion';
import GenerativeAiConsulting from './pages/ai_integration/GenAiConsulting';
import AiAgentDevelopment from './pages/ai_integration/AiAgentDevelopment';
import AiChatBotDevelopment from './pages/ai_integration/AiChatBotDevelopment';
import EnterpriseAi from './pages/ai_integration/EnterpriseAi';
import AiAsAService from './pages/ai_integration/Ai_as_a_service';
import MLModelEngineering from './pages/ai_integration/MLmodelEngerring';
import MLDevelopment from './pages/ai_integration/MLdevelopment';
import DataScientistConsulting from './pages/ai_integration/DataScientistConsulting';
import AIconsulting from './pages/ai_integration/AIconsultiong';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/ai-integration/generative-ai-development" element={<GenerativeAi />} />
            <Route path="/ai-integration/LLMdevelopment" element={<LLMDevelopment />} />
            <Route path="/ai-integration/generative-ai-integration" element={<GenerativeAiIntegration />} />
            <Route path="/ai-integration/chatgpt" element={<ChatGPTIntegration />} />
            <Route path="/ai-integration/generative-ai-consulting" element={<GenerativeAiConsulting />} />
            <Route path="/ai-integration/ai-agent-development" element={<AiAgentDevelopment />} />
            <Route path="/ai-integration/ai-chatbot-development" element={<AiChatBotDevelopment />} />
            <Route path="/ai-integration/enterprise-ai" element={<EnterpriseAi />} />
            <Route path="/ai-integration/ai-as-a-service" element={<AiAsAService />} />
            <Route path="/ai-integration/ml-model-engineering" element={<MLModelEngineering />} />
            <Route path="/ai-integration/ml-development" element={<MLDevelopment />} />
            <Route path="/ai-integration/data-science" element={<DataScientistConsulting />} />
            <Route path="/ai-integration/ai-consulting" element={<AIconsulting />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/cookies" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <ScrollTop />
      </div>
    </Router>
    
  );
};

export default App;