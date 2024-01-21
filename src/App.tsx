import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Transactions from './pages/Transactions/Transactions';
import TokenAmounts from './pages/TokenAmounts/TokenAmounts';

const App: React.FC = () => {
  return (
    <div className="App">      
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route path="/token-amounts" element={<TokenAmounts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
