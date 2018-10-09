import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { groupBy } from 'lodash';
import * as analysesListData from '../../static/analysesList.json';
import { AnalysesTable, AnalysesLegend } from '../';

class AnalysesList extends React.Component {
  private getData = () => {
    return groupBy(analysesListData, 'category');
  };
  public render() {
    const data = this.getData();
    return (
      <Container text textAlign="center">
        <AnalysesLegend />
        {Object.keys(data).map(k => (
          <AnalysesTable key={k} title={k} data={data[k]} />
        ))}
      </Container>
    );
  }
}
export default AnalysesList;
