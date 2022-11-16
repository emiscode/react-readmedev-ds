import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RdInputQty, RdInputQtyProps } from '../src';

export default {
  title: 'components/RdInputQty',
  component: RdInputQty,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof RdInputQty>;

const Template: ComponentStory<typeof RdInputQty> = args => (
  <RdInputQty {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Quantity',
} as RdInputQtyProps;
