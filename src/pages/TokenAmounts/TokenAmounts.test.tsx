import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TokenAmounts from './TokenAmounts';
import { getEthValueAtDate } from '../../utils/apiUtils';

jest.mock('../../utils/apiUtils', () => ({
  getEthValueAtDate: jest.fn(),
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
    fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: '2024-01-22T00:00:00Z' } });

  });

  test('handles search click when there is an error', async () => {
    render(<TokenAmounts />);
    
    // Mock the getEthValueAtDate response
    const mockData = { walletAddress: "testWalletAddress" };
    (getEthValueAtDate as jest.Mock).mockResolvedValueOnce(mockData);

    // Simulate wrong input changes
    fireEvent.change(screen.getByLabelText('Wallet Address'), { target: { value: 'testWalletAddress' } });
    // fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: '2024-01-22T00:00:00Z' } });

    // Simulate search click
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      const errorDisplay = screen.getByTestId('token-amounts-error-display');
      expect(errorDisplay).toBeInTheDocument();
    });
  });
});
