//rati viCI KARGAD ROM AR MIWERIA  DA ARC MUSHAOBS :D 
// (ES ARRIS RICI DAWERAC MOVAXERXE) UBRALOD MEXUTE KURZE VAR VEGAR
//VAMTEVREB KIDEV ROM RAME SHEMETENOS DA TU SHEGIDZLIA 51 QULAMDE ROM AMWIO :D :(
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
// import other pages as you create them

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here, e.g. NewsPage, WeatherPage, AboutPage */}
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
