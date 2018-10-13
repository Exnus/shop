import React from 'react';
import AppContainer from 'components/AppContainer';

export default class AppContainerConnected extends React.PureComponent {
  render() {
    const { children, openCart, openMenu } = this.props;

    return (
      <AppContainer openMenu={openMenu} openCart={openCart}>
        {children}
      </AppContainer>
    );
  }
}
