import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { INavMenuItem } from '../../types';

class NavMenuItem extends React.PureComponent<INavMenuItem> {
  public render() {
    return <Menu.Item name={this.props.name} as={Link} to={this.props.path} />;
  }
}

export default NavMenuItem;
