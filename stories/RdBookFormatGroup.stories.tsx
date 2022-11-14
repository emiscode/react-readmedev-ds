import React from 'react';
import { RdBookFormatGroup, RdBookFormatGroupProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdBookFormatGroup',
  component: RdBookFormatGroup,
} as ComponentMeta<typeof RdBookFormatGroup>;

const Template: ComponentStory<typeof RdBookFormatGroup> = args => (
  <RdBookFormatGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      id: 1,
      title: 'E-book',
      body: '$ 9.99',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Paperback',
      body: '$ 18.99',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Paperback + E-book',
      body: '$ 24.90',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as RdBookFormatGroupProps;
