import React from 'react';
import classNames from 'classNames';
import FormGroup from './FormGroup';
import Glyphicon from './Glyphicon';

class InputGroup extends React.Component {
  renderLabel() {
  }

  renderGroup() {
    let children = this.props.children;

    let addonBefore = this.props.addonBefore ? (
      <span className="input-group-addon" key="addonBefore">
        {this.props.addonBefore}
      </span>
    ) : null;

    let addonAfter = this.props.addonAfter ? (
      <span className="input-group-addon" key="addonAfter">
        {this.props.addonAfter}
      </span>
    ) : null;

    let buttonBefore = this.props.buttonBefore ? (
      <span className="input-group-btn">
        {this.props.buttonBefore}
      </span>
    ) : null;

    let buttonAfter = this.props.buttonAfter ? (
      <span className="input-group-btn">
        {this.props.buttonAfter}
      </span>
    ) : null;

    let inputGroupClassName;
    switch (this.props.bsSize) {
      case 'small': inputGroupClassName = 'input-group-sm'; break;
      case 'large': inputGroupClassName = 'input-group-lg'; break;
    }

    return addonBefore || addonAfter || buttonBefore || buttonAfter ? (
      <div className={classNames(inputGroupClassName, 'input-group')} key="input-group">
        {addonBefore}
        {buttonBefore}
        {children}
        {addonAfter}
        {buttonAfter}
      </div>
    ) : children;
  }

  renderIcon() {
    let glyph;
    switch (this.props.bsStyle) {
      case 'success': glyph = 'ok'; break;
      case 'warning': glyph = 'warning-sign'; break;
      case 'error': glyph = 'remove'; break;
    }

    return this.props.hasFeedback && glyph ? (
      <Glyphicon className="form-control-feedback" glyph={glyph} />
    ) : null;
  }

  renderHelp() {
    return this.props.help ? (
      <span className="help-block" key="help">
        {this.props.help}
      </span>
    ) : null;
  }

  render() {
    let label = this.renderLabel();
    let group = this.renderGroup();
    let icon = this.renderIcon();
    let help = this.renderHelp();

    return (
      <FormGroup >
        {label}
        {group}
        {icon}
        {help}
      </FormGroup>
    );
  }
}

InputGroup.propTypes = {
  addonBefore: React.PropTypes.node,
  addonAfter: React.PropTypes.node,
  buttonBefore: React.PropTypes.node,
  buttonAfter: React.PropTypes.node,
  hasFeedback: React.PropTypes.bool,
  help: React.PropTypes.node,
  bsStyle: React.PropTypes.oneOf(['success', 'warning', 'error']),
  bsSize: React.PropTypes.oneOf(['small', 'medium', 'large'])
};

export default InputGroup;
