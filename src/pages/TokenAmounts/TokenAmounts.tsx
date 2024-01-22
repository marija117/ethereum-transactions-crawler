import React, { useState } from 'react';
import CustomCard from '../../components/Card/Card';
import SearchForm from '../../features/SearchForm/SearchForm';
import ErrorDisplay from '../../features/ErrorDisplay/ErrorDisplay';
import { StyledCardContainer } from "./TokenAmounts.styles";
import { getEthValueAtDate } from '../../utils/apiUtils';

const TokenAmounts: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [ethValue, setEthValue] = useState<number>(0);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const title = "ETH BALANCE";

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

    // Check if date is present
    if (!date) {
      inputErrors.push('Date is required and it cannot be empty.');
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
        setIsCardVisible(false);
        setLoading(false);
        return;
      }

      // Make the API call using the utility function
      const ethBalance = await getEthValueAtDate(walletAddress, date);

      // Handle successful response
      setEthValue(ethBalance);
      setIsCardVisible(true);
      setErrors([]);

    } catch (error) {
      // Handle unsuccessful response
      setIsCardVisible(false);
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
      <StyledCardContainer>
        <CustomCard data-testid="token-amounts-card" shouldShow={isCardVisible} title={title} content={ethValue}/>
      </StyledCardContainer>
    </div>
  );
};

export default TokenAmounts;
