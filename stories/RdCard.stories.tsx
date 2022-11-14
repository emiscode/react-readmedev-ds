import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { RdCard } from '../src/components/RdCard';

export default {
  title: 'Components/RdCard',
  component: RdCard,
} as ComponentMeta<typeof RdCard>;

export const Default = () => {
  return (
    <RdCard>
      <h1>Hey, this is a card!</h1>
    </RdCard>
  );
};
