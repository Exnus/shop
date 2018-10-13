import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Fab from 'components/Fab';

import './style.css';

const block = 'menu-burger';

export default class MenuBurger extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func
  };

  handleClick = event => {
    const { onClick } = this.props;

    if (onClick === undefined) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  render() {
    return (
      <div className={bem({ block })} onClick={this.handleClick}>
        <Fab icon="menu" small={true} />
      </div>
    );
  }
}
