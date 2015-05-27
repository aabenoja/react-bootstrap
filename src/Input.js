import React from 'react';
import ButtonInput from './ButtonInput';
import InputBase from './InputBase';
import FormControls from './FormControls';
import deprecationWarning from './utils/deprecationWarning';

const buttonTypes = FormControls.Button.types;
class Input extends InputBase {
  render() {
    if (buttonTypes.indexOf(this.props.type) > -1) {
      deprecationWarning(`Input type=${this.props.type}`, 'ButtonInput');
      return <ButtonInput {...this.props} />;
    } else if (this.props.type === 'static') {
      deprecationWarning('Input type=static', 'StaticText');
      return <FormControls.Static {...this.props} />;
    }

    return super.render();
  }
}

export default Input;
