import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavMenuItem = props => {
  const { name } = props;
  const path = name === "acasa" ? '' : name.replace(' ', '-');
  return <Menu.Item name={name} as={Link} to={`/${path}`} />;
};

export default NavMenuItem;
