import QuixoticLogo from '../../../resources/QuixoticLogo.webp';
import MetaMaskNetworks from '../../../resources/MetaMaskNetworks.png';
import MetaMaskOptimism from '../../../resources/MetaMaskOptimism.png';

import { QUIXOTIC_RED } from '../../../resources/Constants';

import { Instructions } from './Instructions';
import {
  Container,
  HFlex,
  VFlex,
  LogoImage,
  MetaMaskImage,
  Title,
  Body,
} from './styled';

const TextOnboardingPage: React.FC = () => {
  const renderInstructions = () => {
    return (
      <VFlex style={{ flex: 1, minWidth: 300 }}>
        {Instructions.map((instruction) => {
          return (
            <HFlex>
              <Body style={{ width: 20 }}>{instruction.number}.</Body>
              {instruction.details}
            </HFlex>
          );
        })}
      </VFlex>
    );
  };

  return (
    <div>
      <Container>
        <VFlex>
          <HFlex>
            <LogoImage src={QuixoticLogo} />
            <Title style={{ flex: 1 }}>
              How to connect to Optimistic Ethereum
            </Title>
          </HFlex>
          <Title
            style={{ color: QUIXOTIC_RED, marginTop: 20, marginBottom: 20 }}
          >
            First time on Optimism? Follow these steps to connect your wallet
          </Title>
          <HFlex style={{ flexWrap: 'wrap' }}>
            {renderInstructions()}
            <HFlex>
              <MetaMaskImage src={MetaMaskNetworks} />
              <MetaMaskImage src={MetaMaskOptimism} />
            </HFlex>
          </HFlex>
        </VFlex>
      </Container>
    </div>
  );
};

export default TextOnboardingPage;
