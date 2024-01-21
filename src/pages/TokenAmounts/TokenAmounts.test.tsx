import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import dayjs, { Dayjs } from 'dayjs';
import TokenAmounts from './TokenAmounts';
import { fetchData } from '../../utils/apiUtils';

jest.mock('../../utils/apiUtils', () => ({
  fetchData: jest.fn(),
}));

describe('TokenAmounts Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders TokenAmounts component', () => {
    render(<TokenAmounts />);
  });

  test('renders Error Display component', () => {
    render(<TokenAmounts />);

    const errorDisplay = screen.getByTestId('token-amounts-error-display');
    expect(errorDisplay).toBeInTheDocument();
  });

  test('renders Search Form component', () => {
    render(<TokenAmounts />);

    const searchForm = screen.getByTestId('token-amounts-search-form');
    expect(searchForm).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<TokenAmounts />);
    
    fireEvent.change(screen.getByLabelText('Wallet Address'), { target: { value: 'testWalletAddress' } });
    fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: dayjs('2022-04-17') } });

  });

  test('handles search click', async () => {
    render(<TokenAmounts />);
    
    // Mock the fetchData response
    const mockData = [{ walletAddress:"testWalletAddress"}];
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Wallet Address'), { target: { value: 'testWalletAddress' } });

    // Simulate search click
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith('testWalletAddress');
      const transactionTable = screen.getByTestId('token-amounts-transaction-table');
      expect(transactionTable).toBeInTheDocument();
    });
  });
});
