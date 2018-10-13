import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'menu';

export default class Menu extends React.PureComponent {
  static propTypes = {
    openMenu: PropTypes.bool,
    onClickClose: PropTypes.func
  };

  constructor(props) {
    super(props);

    const open = !!props.openMenu;

    this.state = { open };
  }

  componentWillReceiveProps(props) {
    const { openMenu } = props;

    if (openMenu !== undefined) {
      if (openMenu) {
        this.open();
      } else {
        this.close();
      }
    }
  }

  open() {
    if (this.state.open !== true) {
      this.setState({
        open: true,
        animating: true
      });
    }
  }

  close() {
    if (this.state.open !== false) {
      this.setState({
        open: false,
        animating: true
      });
    }
  }

  getBemMods() {
    let { open, animating } = this.state;

    return {
      open: !!open,
      animating: !!animating
    };
  }

  handleTransitionEnd = event => {
    if (event.propertyName === 'transform' && event.currentTarget === event.target) {
      this.setState({ animating: false });
    }
  };

  render() {
    return (
      <div
        className={bem({ block, mods: this.getBemMods() })}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {this.props.children}
        <div className={bem({ block, elem: 'actions' })}>
          <Button stretch onClick={this.props.onClickClose}>
            Скрыть
          </Button>
        </div>
      </div>
    );
  }
}
