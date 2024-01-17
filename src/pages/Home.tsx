import React, { useState } from 'react';
import './Home.css';
import { Alchemy, Network } from "alchemy-sdk";
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

  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);
  
  async function fetchData() {
    try {
      const categories = ["external", "internal", "erc20", "erc721", "erc1155"];
      const data = await alchemy.core.getAssetTransfers({
        fromBlock: fromBlock,
        fromAddress: walletAddress,
        category: categories as any,
      });

      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="home-container">
      <InputField id="walletAddress" label="Wallet Address" value={walletAddress} onChange={handleWalletAddressChange} />
      <InputField id="fromBlock" label="From Block" value={fromBlock} onChange={handleFromBlockChange} />
      <InputField id="toBlock" label="To Block" value={toBlock} onChange={handleToBlockChange} />
      <CustomButton label="Search" onClick={fetchData} />
  </div>
  );
};

export default Home;
