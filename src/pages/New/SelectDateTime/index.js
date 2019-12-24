import React from 'react';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectDateTime() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

SelectDateTime.navigationOptions = {
  title: 'Selecione o horário',
};
