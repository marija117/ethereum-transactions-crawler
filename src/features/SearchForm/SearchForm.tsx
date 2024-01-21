import React from 'react';
import CustomButton from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import DatePicker from '../../components/DatePicker/DatePicker';
import { StyledSearchFormContainer } from "./SearchForm.styles";

interface SearchFormProps {
  'data-testid': string;
  walletAddress: string;
  fromBlock?: string;
  date?: Date | null;
  onWalletAddressChange: (value: string) => void;
  onFromBlockChange?: (value: string) => void;
  onDateChange?: (date: Date | null) => void;
  onSearchClick: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  'data-testid': testId,
  walletAddress,
  fromBlock,
  date,
  onWalletAddressChange,
  onFromBlockChange,
  onDateChange,
  onSearchClick,
}) => {
  return (
    <StyledSearchFormContainer data-testid={testId}>
      <InputField id="walletAddress" label="Wallet Address" value={walletAddress} onChange={onWalletAddressChange} />
      {fromBlock !== undefined && onFromBlockChange && (
        <InputField id="fromBlock" label="From Block" value={fromBlock} onChange={onFromBlockChange} />
      )}
      {date !== undefined && onDateChange && (
        <DatePicker label="Select Date" value={date} onChange={onDateChange} />
      )}
      <CustomButton label="Search" onClick={onSearchClick} />
    </StyledSearchFormContainer>
  );
};

export default SearchForm;
