import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Methodology from './pages/Methodology';
import Flowchart from './pages/Flowchart';
import Code from './pages/Code';
import CodeExplanation from './pages/CodeExplanation';
import Output from './pages/Output';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/flowchart" element={<Flowchart />} />
            <Route path="/code" element={<Code />} />
            <Route path="/code-explanation" element={<CodeExplanation />} />
            <Route path="/output" element={<Output />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;