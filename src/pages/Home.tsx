import React, { useState } from 'react';
import './Home.css';
import CustomButton from '../components/Button';
import InputField from '../components/InputField';

const Home: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [fromBlock, setFromBlock] = useState('');
  const [toBlock, setToBlock] = useState('');

  const handleWalletAddressChange = (value: string) => {
    setWalletAddress(value);
  };

  const handleFromBlockChange = (value: string) => {
    setFromBlock(value);
  };

  const handleToBlockChange = (value: string) => {
    setToBlock(value);
  };

  const handleSubmit = () => {
    console.log('Wallet Address:', walletAddress);
    console.log('From Block:', fromBlock);
    console.log('To Block:', toBlock);
  };

  return (
    <div className="home-container">
      <InputField label="Wallet Address" value={walletAddress} onChange={handleWalletAddressChange} />
      <InputField label="From Block" value={fromBlock} onChange={handleFromBlockChange} />
      <InputField label="To Block" value={toBlock} onChange={handleToBlockChange} />
      <CustomButton onClick={handleSubmit} />
  </div>
  );
};

export default Home;
