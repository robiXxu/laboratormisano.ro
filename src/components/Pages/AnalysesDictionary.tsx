import * as React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { AnalysisDictionaryItem } from '../';

import * as analysesDictionaryData from '../../static/analysesDictionary.json';

class AnalysesDictionary extends React.Component {
  public render() {
    return (
      <Container>
        <Segment inverted>
          <List divided inverted relaxed>
            {analysesDictionaryData.map(item => (
              <AnalysisDictionaryItem
                key={item.name}
                name={item.name}
                description={item.description}
              />
            ))}
          </List>
        </Segment>
      </Container>
    );
  }
}

export default AnalysesDictionary;
