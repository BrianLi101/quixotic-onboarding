import { useEffect, useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from '@mui/material';

import QuixoticLogo from '../../../resources/QuixoticLogo.webp';
import { QUIXOTIC_RED } from '../../../resources/Constants';
import { OptimismChainData } from '../../../resources/Constants';
import { switchEthereumChain, addOptimismChain } from '../../../utils/wallet';

import { Container, LogoImage } from './styled';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

interface ConnectInfo {
  chainId: string;
}

enum OnboardingStep {
  installMetaMask = 0,
  switchToOptimism = 1,
  bridgeToOptimism = 2,
}

const steps = [
  {
    label: 'Install MetaMask',
    description: `MetaMask is a browser-based wallet that enables you to trade on Quixotic!`,
  },
  {
    label: 'Switch to Optimism',
    description: `Optimism (aka Optimistic Ethereum) is an Ethereum Layer 2 that has much lower gas fees!`,
  },
  {
    label: 'Bridge ETH to Optimism',
    description: `Before making a trade, you'll need to bridge some ETH to Optimism!`,
  },
];

const AutomaticOnboardingPage: React.FC = () => {
  const [hasMetaMask, setHasMetaMask] = useState<boolean>();
  const [doesNotHaveOptimism, setDoesNotHaveOptimism] =
    useState<boolean>(false);
  const [chainId, setChainId] = useState<string>();

  const [activeStep, setActiveStep] = useState<OnboardingStep>(
    OnboardingStep.installMetaMask
  );

  useEffect(() => {
    window.ethereum.on('connect', (connectInfo: ConnectInfo) => {
      setHasMetaMask(true);
      setChainId(connectInfo.chainId);
    });
    window.ethereum.on('chainChanged', (_chainId: string) => {
      window.location.reload();
      console.log('chain chainged', _chainId);
    });
  }, []);

  useEffect(() => {
    if (
      chainId &&
      chainId.toLowerCase() === OptimismChainData.chainId.toLocaleLowerCase()
    ) {
      setActiveStep(OnboardingStep.bridgeToOptimism);
    } else if (hasMetaMask) {
      setActiveStep(OnboardingStep.switchToOptimism);
    }
  }, [hasMetaMask, chainId]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getActionButton = () => {
    let label = 'Next';
    let onClick = () => {
      handleNext();
    };
    switch (activeStep) {
      case OnboardingStep.installMetaMask:
        label = 'Download';
        onClick = () => {
          window.open('https://metamask.io/download/', '_blank');
          handleNext();
        };
        break;
      case OnboardingStep.switchToOptimism:
        label = doesNotHaveOptimism ? 'Add Optimism Chain' : 'Switch Chain';
        onClick = () => {
          if (doesNotHaveOptimism) {
            addOptimismChain();
          } else {
            switchEthereumChain(OptimismChainData.chainId)
              .then((res) => {
                handleNext();
              })
              .catch((switchError) => {
                if (switchError.code === 4902) {
                  setDoesNotHaveOptimism(true);
                } else {
                  alert('Oops! Something went wrong...');
                }
              });
          }
        };
        break;
      case OnboardingStep.bridgeToOptimism:
        label = 'Bridge on Hop';
        onClick = () => {
          window.open(
            'https://app.hop.exchange/#/send?token=ETH&destNetwork=optimism',
            '_blank'
          );
          handleNext();
        };
        break;
    }
    return (
      <Button variant="contained" onClick={onClick} sx={{ mt: 1, mr: 1 }}>
        {label}
      </Button>
    );
  };

  return (
    <Container>
      <LogoImage src={QuixoticLogo} />
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography style={{ textAlign: 'left' }}>
                  {step.description}
                </Typography>
                <Box sx={{ mb: 2, mt: 2 }}>
                  <div style={{ textAlign: 'left' }}>
                    {getActionButton()}
                    <Button onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                      Next
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography></Typography>
            <Button
              onClick={() => {
                // setActiveStep(0);
              }}
              sx={{ mt: 1, mr: 1 }}
            >
              Start Trading!
            </Button>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default AutomaticOnboardingPage;
