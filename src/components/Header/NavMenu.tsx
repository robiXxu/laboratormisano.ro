import * as React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import * as navData from '../../static/nav.json';
import { NavMenuItem } from '..';

const NavMenu = () => (
  <Segment inverted compact>
    <Menu inverted secondary stackable>
      {navData.map(nav => (
        <NavMenuItem key={nav.name} name={nav.name} path={nav.path} />
      ))}
    </Menu>
  </Segment>
);

export default NavMenu;
