import React from 'react';
import { RdBookFormatGroup } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdBookFormatGroup',
  component: RdBookFormatGroup,
} as ComponentMeta<typeof RdBookFormatGroup>;

const Template: ComponentStory<typeof RdBookFormatGroup> = () => (
  <RdBookFormatGroup />
);

export const Default = Template.bind({});
