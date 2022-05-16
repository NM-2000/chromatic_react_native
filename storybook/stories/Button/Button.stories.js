import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from '../../../src/components';

const props = {
  backgroundColor: 'purple',
  text: "Button",
  click: action('click-button'),
};

storiesOf('Button', module)
  .add('Default', () => (
    <Button {...props} />
  ));
