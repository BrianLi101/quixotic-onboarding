import { Container, HFlex, VFlex, LogoImage, Title, Body } from './styled';

interface Instruction {
  number: number;
  details: React.ReactNode;
}

export const Instructions: Instruction[] = [
  {
    number: 1,
    details: (
      <Body>
        Click on <b>'Connect Wallet'</b> to connect your wallet to Ethereum.
      </Body>
    ),
  },
  {
    number: 2,
    details: (
      <Body>
        Open MetaMask and click on the network name at the top of the window.
      </Body>
    ),
  },
  {
    number: 3,
    details: (
      <Body>
        Click the <b>'Custom RPC'</b> button at the bottom of the network list.
      </Body>
    ),
  },
  {
    number: 4,
    details: (
      <VFlex>
        <Body>
          Enter the following network details or click here to auto-populate
          them in MetaMask.
        </Body>
        <VFlex style={{ marginLeft: 20 }}>
          <Body>Network Name: Optimistic Ethereum</Body>
          <Body>New RPC URL: https://mainnet.optimisim.io</Body>
          <Body>Chain ID: 10</Body>
          <Body>Currency Symbol: ETH</Body>
          <Body>Block Explorer URL: https://optimistic.etherscan.io</Body>
        </VFlex>
      </VFlex>
    ),
  },
  {
    number: 5,
    details: (
      <Body>
        Click <b>'Save'</b> and you'll be automatically connected to the
        network.
      </Body>
    ),
  },
];
