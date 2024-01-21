import React, { useState } from 'react';
import SearchForm from '../../features/SearchForm/SearchForm';
import ErrorDisplay from '../../features/ErrorDisplay/ErrorDisplay';
import { fetchData } from '../../utils/apiUtils';

const TokenAmounts: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleWalletAddressChange = (value: string) => {
    setWalletAddress(value);
  };
  
  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const validateInput = () => {
    const inputErrors: string[] = [];

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
        setLoading(false);
        return;
      }

      // Make the API call using the utility function
      const data = await fetchData(walletAddress);

      // Handle successful response
      console.log('Fetched data:', data);
      setErrors([]);

    } catch (error) {
      // Handle unsuccessful response
      console.error('Error fetching data:', error);
      setErrors([error instanceof Error ? error.message : 'An error occurred while fetching data.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ErrorDisplay data-testid="token-amounts-error-display" errors={errors} />
      <SearchForm
        data-testid="token-amounts-search-form"
        walletAddress={walletAddress}
        date={date}
        onWalletAddressChange={handleWalletAddressChange}
        onDateChange={handleDateChange}
        onSearchClick={handleSearchClick}
      />
    </div>
  );
};

export default TokenAmounts;
