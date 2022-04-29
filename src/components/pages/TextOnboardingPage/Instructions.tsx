import { QUIXOTIC_RED } from '../../../resources/Constants';

import {
  Container,
  HFlex,
  VFlex,
  LogoImage,
  Title,
  Body,
  RedSpan,
} from './styled';

interface Instruction {
  number: number;
  details: React.ReactNode;
}

const Linkify = (text: string, url?: string) => {
  return (
    <a
      href={url || text}
      target={'_blank'}
      rel="noreferrer"
      style={{ color: QUIXOTIC_RED }}
    >
      {text}
    </a>
  );
};

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
          Enter the following network details or{' '}
          {Linkify('click here', 'https://chainid.link/?network=optimism')} to
          auto-populate them in MetaMask.
        </Body>
        <VFlex style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }}>
          <Body>
            Network Name: <RedSpan>Optimistic Ethereum</RedSpan>
          </Body>
          <Body>
            New RPC URL: <RedSpan>https://mainnet.optimisim.io</RedSpan>
          </Body>
          <Body>
            Chain ID: <RedSpan>10</RedSpan>
          </Body>
          <Body>
            Currency Symbol: <RedSpan>ETH</RedSpan>
          </Body>
          <Body>
            Block Explorer URL:{' '}
            <RedSpan>https://optimistic.etherscan.io</RedSpan>
          </Body>
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
