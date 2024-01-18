import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { StyledButton} from "./Button.styles";

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
