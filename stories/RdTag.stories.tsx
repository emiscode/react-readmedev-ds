import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RdTag, RdTagProps } from '../src';

export default {
  title: 'Components/RdTag',
  component: RdTag,
} as ComponentMeta<typeof RdTag>;

const Template: ComponentStory<typeof RdTag> = args => <RdTag {...args} />;

export const Tag = Template.bind({});

Tag.args = {
  text: 'JavaScript',
} as RdTagProps;
