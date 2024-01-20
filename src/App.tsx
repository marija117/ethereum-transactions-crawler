import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Transactions from './pages/Transactions/Transactions';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="App">      
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Transactions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
