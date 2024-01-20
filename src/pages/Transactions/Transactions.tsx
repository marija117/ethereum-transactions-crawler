import React, { useState } from 'react';
import { GridValidRowModel } from '@mui/x-data-grid';
import { StyledTableContainer } from "./Transactions.styles";
import SearchForm from '../../features/SearchForm/SearchForm';
import ErrorDisplay from '../../features/ErrorDisplay/ErrorDisplay';
import TransactionTable from '../../features/TransactionTable/TransactionTable';
import { fetchData } from '../../utils/apiUtils';

const Transactions: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [fromBlock, setFromBlock] = useState('');
  const [transactionData, setTransactionData] = useState(Array<GridValidRowModel>);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleWalletAddressChange = (value: string) => {
    setWalletAddress(value);
  };

  const handleFromBlockChange = (value: string) => {
    setFromBlock(value);
  };

  const validateInput = () => {
    const inputErrors: string[] = [];

    // Check if fromBlock is a valid number
    if (isNaN(Number(fromBlock))) {
      inputErrors.push('Invalid value for From Block. Please provide a valid number.');
    }

    // Check if walletAddress is present
    if (!walletAddress) {
      inputErrors.push('Wallet Address is required and it cannot be empty.');
    }
    return inputErrors;
  };

  const handleSearchClick = async () => {
     try {
      setLoading(true);

      // Validate input
      const inputErrors = validateInput();
      if (inputErrors.length > 0) {
        setErrors(inputErrors);
        setIsTableVisible(false);
        setLoading(false);
        return;
      }

      // Make the API call using the utility function
      const data = await fetchData(fromBlock, walletAddress);

      // Handle successful response
      console.log('Fetched data:', data);
      setTransactionData(data);
      setIsTableVisible(true);
      setErrors([]);

    } catch (error) {
      // Handle unsuccessful response
      console.error('Error fetching data:', error);
      setIsTableVisible(false);
      setErrors([error instanceof Error ? error.message : 'An error occurred while fetching data.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ErrorDisplay data-testid="transactions-error-display" errors={errors} />
      <SearchForm
        data-testid="transactions-search-form"
        walletAddress={walletAddress}
        fromBlock={fromBlock}
        onWalletAddressChange={handleWalletAddressChange}
        onFromBlockChange={handleFromBlockChange}
        onSearchClick={handleSearchClick}
      />
      <StyledTableContainer>
        <TransactionTable data-testid="transactions-transaction-table" shouldShow={isTableVisible} transactionData={transactionData}/>
      </StyledTableContainer>
    </div>
  );
};

export default Transactions;
