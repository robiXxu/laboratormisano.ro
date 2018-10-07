import * as React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import { NavMenu } from '..';

class Top extends React.PureComponent {
  public render() {
    return (
      <Grid centered verticalAlign="middle">
        <Grid.Row columns="1">
          <div>
            <Header as='h1' dividing={true}>MISANO SRL</Header>
            <Header.Subheader>Laborator Analize Medicale</Header.Subheader>
            <Header.Subheader>Acreditat RENAR : SR EN ISO 15189:2007</Header.Subheader>
          </div>
        </Grid.Row>
        <Grid.Row columns="1">
          <NavMenu />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Top;
