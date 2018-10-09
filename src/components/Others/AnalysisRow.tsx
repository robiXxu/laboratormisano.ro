import * as React from 'react';
import { Table } from 'semantic-ui-react';
import { IAnalysisType } from '../../types';

class AnalysisRow extends React.PureComponent<IAnalysisType> {
  public render() {
    return (
      <Table.Row>
        <Table.Cell>{ this.props.name }</Table.Cell>
        <Table.Cell>{ this.props.code }</Table.Cell>
        <Table.Cell>{ this.props.method }</Table.Cell>
      </Table.Row>
    );
  }
}

export default AnalysisRow;
