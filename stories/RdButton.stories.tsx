import React from 'react';
import { RdButton, RdButtonProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdButton',
  component: RdButton,
} as ComponentMeta<typeof RdButton>;

const Template: ComponentStory<typeof RdButton> = args => (
  <RdButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary Button',
  btnType: 'primary',
} as RdButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary Button',
  btnType: 'secondary',
} as RdButtonProps;
