import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const StyledButton = styled(Button)({
  margin: '8px',
  padding: '8px'
});

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <StyledButton variant="outlined" color="primary" startIcon={<SearchIcon />} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default CustomButton;
