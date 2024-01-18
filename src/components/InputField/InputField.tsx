import React from 'react';
import { StyledTextField} from "./InputField.styles";

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, value, onChange }) => {
  return (
    <div>
      <StyledTextField id={id} label={label} variant="standard" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputField;
