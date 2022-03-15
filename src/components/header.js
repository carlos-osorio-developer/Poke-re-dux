import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../assets/images/logo_v4.svg';

const Header = () => (
  <SemanticMenu fixed="top">
    <Container>
      <SemanticMenu.Item to="/">
        <Image size="small" src={logo} />
      </SemanticMenu.Item>
      <SemanticMenu.Item to="/">Home</SemanticMenu.Item>
      <SemanticMenu.Item to="/" position="righ t">
        Favorites
      </SemanticMenu.Item>
    </Container>
  </SemanticMenu>
);

export default Header;
