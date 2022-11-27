import React from 'react';
import { RdModal, RdModalProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdModal',
  component: RdModal,
} as ComponentMeta<typeof RdModal>;

const Template: ComponentStory<typeof RdModal> = args => <RdModal {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  open: true,
  title: 'Modal Aberta',
  children: <h1>Conteúda da modal</h1>,
} as RdModalProps;
