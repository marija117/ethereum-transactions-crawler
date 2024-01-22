import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateTimePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleDateChange = (newDate: Date | null) => {
    onChange(newDate);
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={handleDateChange}
        timezone="UTC"
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
