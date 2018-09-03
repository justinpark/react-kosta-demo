import React from 'react';

import { storiesOf } from '@storybook/react';
import ColumnRow from '../components/ColumnRow';
import Column from '../components/Column';

storiesOf('Column', module)
  .add('with sm', () => (
    <ColumnRow>
      <Column sm={6}>
        <div style={{ backgroundColor: '#EEE' }}>
          sm6
        </div>
      </Column>
      <Column sm={6}>
        <div style={{ backgroundColor: '#EEE' }}>
          sm6
        </div>
      </Column>
    </ColumnRow>
  ))
  .add('with offset', () => (
    <ColumnRow>
      <Column sm={6} smOffset={3}>
        <div style={{ backgroundColor: '#EEE' }}>
          sm6-offset-3
        </div>
      </Column>
      <Column sm={3}>
        <div style={{ backgroundColor: '#EEE' }}>
          sm3
        </div>
      </Column>
    </ColumnRow>
  ));
