import React from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

const StyledTextField = styled(TextField)({
  margin: '15px',
});

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <StyledTextField id="filled-basic" label={label} variant="standard" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputField;
