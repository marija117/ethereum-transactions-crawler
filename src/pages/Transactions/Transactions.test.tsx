import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Transactions from './Transactions';
import { fetchData } from './apiUtils';

jest.mock('./apiUtils', () => ({
  fetchData: jest.fn(),
}));

describe('Transactions Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders Transactions component', () => {
    render(<Transactions />);
  });

  test('renders Error Display component', () => {
    render(<Transactions />);

    const errorDisplay = screen.getByTestId('transactions-error-display');
    expect(errorDisplay).toBeInTheDocument();
  });

  test('renders Search Form component', () => {
    render(<Transactions />);

    const searchForm = screen.getByTestId('transactions-search-form');
    expect(searchForm).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(<Transactions />);
    
    fireEvent.change(screen.getByLabelText('Wallet Address'), { target: { value: 'testWalletAddress' } });
    fireEvent.change(screen.getByLabelText('From Block'), { target: { value: '0x0' } });

  });

  test('handles search click', async () => {
    render(<Transactions />);
    
    // Mock the fetchData response
    const mockData = [{ walletAddress:"testWalletAddress", fromBlock: '0x0'}];
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);

    // Simulate input changes
    fireEvent.change(screen.getByLabelText('Wallet Address'), { target: { value: 'testWalletAddress' } });
    fireEvent.change(screen.getByLabelText('From Block'), { target: { value: '0x0' } });

    // Simulate search click
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith('0x0', 'testWalletAddress');
      const transactionTable = screen.getByTestId('transactions-transaction-table');
      expect(transactionTable).toBeInTheDocument();
    });
  });
});
