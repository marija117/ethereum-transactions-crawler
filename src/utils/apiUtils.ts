import { Alchemy, Network, Utils } from 'alchemy-sdk';
import EthDater from 'ethereum-block-by-date';
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const dater = new EthDater(alchemy.core as any);
const categories = ['external', 'internal', 'erc20', 'erc721', 'erc1155'];

export const fetchData = async (walletAddress: string, fromBlock: string) => {
  const data = await alchemy.core.getAssetTransfers({
    fromBlock: '0x' + Number(fromBlock).toString(16),
    fromAddress: walletAddress,
    withMetadata: true,
    category: categories as any,
  });

  return data.transfers;
};

export const getEthValueAtDate = async (walletAddress: string, date: Date | null) => {
  let block = await dater.getDate(date as Date);
  block  = block['block'] as any

  const balanceResponse = await alchemy.core.getBalance(walletAddress, block as any);
  const ethBalance = Utils.formatEther(balanceResponse);

  return parseFloat(ethBalance);
};

//get erc20 tokens balances for the address 
export const getTokenAmounts = async (walletAddress: string) => {
  const tokenBalances = await alchemy.core.getTokenBalances(walletAddress);
  return tokenBalances;
}
