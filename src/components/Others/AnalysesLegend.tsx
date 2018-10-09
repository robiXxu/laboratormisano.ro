import * as React from 'react';
import { List, Segment, Header } from 'semantic-ui-react';

class AnalysesLegend extends React.PureComponent {
  public render() {
    return (
      <Segment inverted textAlign="left">
        <Header as='h3'>Legend</Header>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              <List.Header>*1)</List.Header>
              - analize decontate de CJAS pe bilet de trimitere de la orice medic;
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>*2)</List.Header>
              - analize decontate de CJAS doar cu trimitere de la medic specialist;
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>*</List.Header>
              - analize decontate de CJAS cu trimitere de la medic, doar la gravide.
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  }
}

export default AnalysesLegend;
