import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import * as navData from '../static/nav.json';
import { Top, Footer } from '../components';
import * as Components from '../components';

const AppRouter = () => (
  <BrowserRouter>
    <Grid>
      <Grid.Row centered verticalAlign="middle">
        <Top />
      </Grid.Row>
      <Grid.Row>
        <Container>
          <Switch>
            {navData.map(nav => (
              <Route
                key={nav.name}
                path={`${process.env.PUBLIC_URL}${nav.path}`}
                component={Components[nav.component]}
                exact={true}
              />
            ))}
          </Switch>
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Footer />
      </Grid.Row>
    </Grid>
  </BrowserRouter>
);

export default AppRouter;
