import React, { useState } from 'react';
import { Alchemy, Network } from "alchemy-sdk";
import CustomButton from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import { GridValidRowModel } from '@mui/x-data-grid';
import { StyledFormContainer, StyledTableContainer } from "./Home.styles";

const Home: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [fromBlock, setFromBlock] = useState('');
  const [toBlock, setToBlock] = useState('');
  const [transactionData, setTransactionData] = useState(Array<GridValidRowModel>);

  const shouldShowTable = (): boolean => { return transactionData.length !== 0; };

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

      console.log('Fetched data:', data.transfers);
      setTransactionData(data.transfers);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <StyledFormContainer>
        <InputField id="walletAddress" label="Wallet Address" value={walletAddress} onChange={handleWalletAddressChange} />
        <InputField id="fromBlock" label="From Block" value={fromBlock} onChange={handleFromBlockChange} />
        <InputField id="toBlock" label="To Block" value={toBlock} onChange={handleToBlockChange} />
        <CustomButton label="Search" onClick={fetchData} />
      </StyledFormContainer>
      <StyledTableContainer>
        <TransactionTable shouldShow={shouldShowTable()} transactionData={transactionData}/>
      </StyledTableContainer>
    </div>
  );
};

export default Home;
