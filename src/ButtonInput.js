import React from 'react';
import Button from './FormControls/Button';
import deprecationWarning from './utils/deprecationWarning';

export default class ButtonInput extends React.Component {
  render() {
    deprecationWarning('ButtonInput', 'FormControls.Button');
    return <Button {...this.props} />;
  }
}
