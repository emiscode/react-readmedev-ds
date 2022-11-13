import React from 'react';
import { RdButton } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdButton',
  component: RdButton,
} as ComponentMeta<typeof RdButton>;

const Template: ComponentStory<typeof RdButton> = () => <RdButton />;

export const Primary = Template.bind({});
