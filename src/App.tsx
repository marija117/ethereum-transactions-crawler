import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

import './App.css'; 

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [block, setBlock] = useState('');

  const handleWalletAddressChange = (value: string) => {
    setWalletAddress(value);
  };

  const handleBlockChange = (value: string) => {
    setBlock(value);
  };

  const handleSubmit = () => {
    // Handle the form submission logic
    console.log('Input 1:', walletAddress);
    console.log('Input 2:', block);
  };

  return (
    <div className="App">
      <InputField label="Wallet address" value={walletAddress} onChange={handleWalletAddressChange} />
      <InputField label="Block" value={block} onChange={handleBlockChange} />
      <Button onClick={handleSubmit} />
    </div>
  );
};

export default App;
