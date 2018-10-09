import * as React from 'react';
import { Container } from 'semantic-ui-react';

class AnalysesResults extends React.PureComponent {
  public render() {
    return (
      <Container>
        <iframe
          src="http://laboratormisano.ro/analize/"
          style={{
            width: '100%',
            height: '1000px',
            border: 0
          }}
        />
      </Container>
    );
  }
}
export default AnalysesResults;
