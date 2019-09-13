import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Input from '../components/Input';
import Warning from '../components/Warning';

storiesOf('Button', module)
  .add('Texto', () => <Button>Salvar</Button>)
  .add('Com emoji', () => (
    <Button>
      Confirmar
      <span role="img" aria-label="Joinha">
        👍
      </span>
    </Button>
  ));

storiesOf('Input', module).add('Texto', () => (
  <Input name="title" type="text" placeholder="Digite seu texto aqui" />
));

storiesOf('Warning', module).add('Texto', () => (
  <Warning>Texto de aviso</Warning>
));
