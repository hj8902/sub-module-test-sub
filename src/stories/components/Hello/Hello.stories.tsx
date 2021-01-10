import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Hello from './Hello';

export default {
  // display group and path on storybook
  title: 'components/Hello',
  component: Hello,
  // apply addon
  decorators: [withKnobs]
};

// knobs with default props
// https://www.npmjs.com/package/@storybook/addon-knobs#available-knobs
export const hello = () => {
  const big = boolean('big', false);
  const name = text('name', 'Storybook');
  return <Hello name={name} big={big} onHello={action('onHello')} onBye={action('onBye')} />;
};

// default component
hello.story = {
  name: 'Default'
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
