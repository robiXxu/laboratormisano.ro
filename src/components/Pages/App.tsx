import * as React from 'react';
import { Container } from 'semantic-ui-react';
import AppRouter from '../../router/AppRouter';


class App extends React.PureComponent{
  public render() {
    return (
      <Container style={{ margin: '30px' }} fluid={ true }>
        <AppRouter />
      </Container>
    );
  }
}
export default App;