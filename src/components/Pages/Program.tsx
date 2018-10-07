import * as React from 'react';
import { Table, Container } from 'semantic-ui-react';

import * as programData from '../../static/program.json';

const Program = () => (
  <Container text textAlign="center">
    <Table celled inverted selectable stackable compact>
      <Table.Header>
        <Table.Row textAlign="center">
          {programData.headers.map(h => (
            <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {programData.data.map((row, rowIndex) => (
          <Table.Row textAlign="center" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Table.Cell key={`${rowIndex}_${cellIndex}_${cell}`}>
                {cell}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Container>
);

export default Program;
