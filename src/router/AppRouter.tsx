import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { Top, Home, Program, Equipment, Contact } from '../components';

const AppRouter = () => (
  <BrowserRouter>
    <Grid>
      <Grid.Row centered verticalAlign="middle">
        <Top />
      </Grid.Row>
      <Grid.Row>
        <Container>
          <Switch>
            <Route path="/" component={ Home } exact={true} />
            <Route path="/program" component={ Program } />
            <Route path="/dotari" component={ Equipment } />
            <Route path="/contact" component={ Contact } />
          </Switch>
        </Container>
      </Grid.Row>
    </Grid>
  </BrowserRouter>
);

export default AppRouter;
