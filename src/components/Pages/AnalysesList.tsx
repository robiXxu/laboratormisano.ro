import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { groupBy } from 'lodash';
import * as analysesListData from '../../static/analysesList.json';
import { AnalysesTable } from '../';

class AnalysesList extends React.Component {
  private getData = () => {
    return groupBy(analysesListData, 'category');
  };
  public render() {
    const data = this.getData();
    return (
      <Container text textAlign="center">
        {Object.keys(data).map(k => (
          <AnalysesTable key={k} title={k} data={data[k]} />
        ))}
      </Container>
    );
  }
}
export default AnalysesList;
