import styled from 'styled-components';

import { QUIXOTIC_RED } from '../../../resources/Constants';

export const Container = styled.div`
  border-radius: 20px;
  border-width: 4px;
  border-style: solid;
  border-color: ${QUIXOTIC_RED};

  padding: 20px;
  margin: 20px;
`;

export const HFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  width: 120px;
  height: 40px;
`;

export const MetaMaskImage = styled.img`
  width: 200px;
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-size: 25px;
`;

export const Body = styled.p`
  margin: 0px;
  padding: 0px;
  text-align: left;
`;
export const RedSpan = styled.span`
  color: ${QUIXOTIC_RED};
`;
