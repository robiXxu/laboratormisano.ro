import * as React from 'react';
import { List } from 'semantic-ui-react';
import { IAnalysisDictionaryItemProps } from '../../types';

class AnalysisDictionaryItem extends React.PureComponent<IAnalysisDictionaryItemProps> {
  public render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header>{this.props.name}</List.Header>
          {this.props.description}
        </List.Content>
      </List.Item>
    );
  }
}

export default AnalysisDictionaryItem;
