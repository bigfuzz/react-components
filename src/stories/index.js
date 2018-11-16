import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import './base.css';


import { Button, Welcome } from '@storybook/react/demo';
  
storiesOf('Form Fields', module)
  .add('Text Inputs', () => (
    <React.Fragment>
    <div className="form-group">
      <div className="form-element full">
        <label htmlFor="inputid">Field Label - Full Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
    </div>
    <div className="form-group">
      <div className="form-element half">
        <label htmlFor="inputid">Field Label - Half Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
      <div className="form-element half">
        <label htmlFor="inputid">Field Label - Half Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
    </div>
    <div className="form-group">
      <div className="form-element quarter">
        <label htmlFor="inputid">Field Label - Quarter Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
      <div className="form-element quarter">
        <label htmlFor="inputid">Field Label - Quarter Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
      <div className="form-element quarter">
        <label htmlFor="inputid">Field Label - Quarter Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
      <div className="form-element quarter">
        <label htmlFor="inputid">Field Label - Quarter Width</label>
        <input type="text" placeholder="Placeholder Text" name="inputid" id="inputid"/>
      </div>
    </div>
    </React.Fragment>
  ));
  
storiesOf ('Users', module)
  .add('Profile', () => (
    <div className="profile">
      <button>BA</button>
    </div>
  ));
