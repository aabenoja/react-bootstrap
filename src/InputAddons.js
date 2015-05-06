import React from 'react';
import classnames from 'classNames';

function renderAddon({className, children}, isAfter) {
  let key = isAfter ? 'addonAfter' : 'addonBefore';

  return (
    <span className={classnames(className, 'input-group-addon')} key={key}>
      {children}
    </span>
  );
}

function renderButton({children, className}) {
  return (
    <span className={classnames(className, 'input-group-btn')}>
      {children}
    </span>
  );
}

export class AddonBefore extends React.Component {
  render() {
    return renderAddon(this.props);
  }
}

export class AddonAfter extends React.Component {
  render() {
    return renderAddon(this.props, true);
  }
}

export class ButtonBefore extends React.Component {
  render() {
    return renderButton(this.props);
  }
}

export class ButtonAfter extends React.Component {
  render() {
    return renderButton(this.props);
  }
}
