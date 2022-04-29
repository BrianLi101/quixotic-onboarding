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

export const LogoImage = styled.img`
  width: 120px;
  height: 40px;
`;
