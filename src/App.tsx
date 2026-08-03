import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalProvider } from './contexts/ModalContext';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalNoticePage from './pages/LegalNoticePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ModalContact from './components/ui/ModalContact';
import CookieBanner from './components/ui/CookieBanner';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ModalProvider>
          <Router>
            <div className="App">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/legal-notice" element={<LegalNoticePage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              <ModalContact />
              <CookieBanner />
            </div>
          </Router>
        </ModalProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
