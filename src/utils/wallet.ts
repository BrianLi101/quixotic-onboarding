import { EthereumChainData } from '../types/wallet';
import { OptimismChainData } from '../resources/Constants';

export const switchEthereumChain = (chainId: string): Promise<any> => {
  return window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId }],
  });
};

export const addOptimismChain = (): Promise<any> => {
  return window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [OptimismChainData],
  });
};
