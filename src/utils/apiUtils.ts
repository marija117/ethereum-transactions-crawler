import { Alchemy, Network } from 'alchemy-sdk';

export const fetchData = async (fromBlock: string, walletAddress: string) => {
  const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);
  const categories = ['external', 'internal', 'erc20', 'erc721', 'erc1155'];

  const data = await alchemy.core.getAssetTransfers({
    fromBlock: '0x' + Number(fromBlock).toString(16),
    fromAddress: walletAddress,
    category: categories as any,
  });

  return data.transfers;
};
