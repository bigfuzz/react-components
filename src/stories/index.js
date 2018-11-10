import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import './base.css';


import { Button, Welcome } from '@storybook/react/demo';
  
storiesOf('Form Fields', module)
  .add('Text Inputs', () => (
    <div className="form-element full">
      <label htmlFor="inputid">Field Label</label>
      <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
    </div>
  ));
  
storiesOf ('Users', module)
  .add('Profile', () => (
    <div className="profile">
      <button>BA</button>
    </div>
  ));
