import React from 'react';
import InputField from '../../components/InputField/InputField';
import CustomButton from '../../components/Button/Button';
import { StyledSearchFormContainer } from "./SearchForm.styles";

interface SearchFormProps {
  walletAddress: string;
  fromBlock: string;
  onWalletAddressChange: (value: string) => void;
  onFromBlockChange: (value: string) => void;
  onSearchClick: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  walletAddress,
  fromBlock,
  onWalletAddressChange,
  onFromBlockChange,
  onSearchClick,
}) => {
  return (
    <StyledSearchFormContainer>
      <InputField id="walletAddress" label="Wallet Address" value={walletAddress} onChange={onWalletAddressChange} />
      <InputField id="fromBlock" label="From Block" value={fromBlock} onChange={onFromBlockChange} />
      <CustomButton label="Search" onClick={onSearchClick} />
    </StyledSearchFormContainer>
  );
};

export default SearchForm;
