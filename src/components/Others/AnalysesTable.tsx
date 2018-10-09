import * as React from 'react';
import { Container, Header, Table } from 'semantic-ui-react';
import { IAnalysesTableProps } from '../../types';
import { AnalysisRow } from '../';

class AnalysesTable extends React.PureComponent<IAnalysesTableProps> {
  public render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Header as="h3">{this.props.title}</Header>
        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nume</Table.HeaderCell>
              <Table.HeaderCell>Cod</Table.HeaderCell>
              <Table.HeaderCell>Metoda</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.data.map(row => (
              <AnalysisRow
                key={row.name}
                name={row.name}
                code={row.code}
                method={row.method}
                category={row.category}
              />
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default AnalysesTable;
