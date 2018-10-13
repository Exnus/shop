import React from 'react';
import Menu from 'components/Menu';
//import Button from 'components/Button';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';
import { FormattedMessage } from 'react-intl';

export default class SideMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.items !== nextProps.items || this.props.openMenu !== nextProps.openMenu;
  }

  renderItem = item => {
    return (
      <NavItem
        icon={item.get('icon')}
        key={item.get('id')}
        link={item.get('link')}
        active={item.get('active')}
      >
        <FormattedMessage id={item.get('token')} />
      </NavItem>
    );
  };

  render() {
    let { openMenu, items, activeIndex } = this.props;

    return (
      <Menu openMenu={openMenu} onClickClose={this.props.onClickClose}>
        {items.map(this.renderItem)}
      </Menu>
    );
  }
}
