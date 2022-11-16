import React from 'react';
import { RdInput, RdInputProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/RdInput',
  component: RdInput,
} as ComponentMeta<typeof RdInput>;

const Template: ComponentStory<typeof RdInput> = args => <RdInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'email',
  label: 'E-mail',
  placeholder: 'your best e-mail here',
} as RdInputProps;
