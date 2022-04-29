import { EthereumChainData } from '../types/wallet';

export const QUIXOTIC_RED = 'rgb(255,0,32)';

export const OptimismChainData: EthereumChainData = {
  chainId: '0xA',
  blockExplorerUrls: ['https://optimistic.etherscan.io'],
  chainName: 'Optimism',
  rpcUrls: ['https://mainnet.optimism.io/'],
};
