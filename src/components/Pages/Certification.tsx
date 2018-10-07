import * as React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import * as certificationImage from '../../static/images/certificat.jpg';
// @ts-ignore
import * as certificationRenar from '../../static/pdf/Certificat_RENAR.pdf';
// @ts-ignore
import * as certificationAnnex from '../../static/pdf/LM_349_A_LAM_MISANO.pdf';

class Certification extends React.PureComponent {
  public render() {
    return (
      <Grid stackable centered>
        <Grid.Row>
        <Image src={ certificationImage }/>
        </Grid.Row>
        <Grid.Row>
          <Button primary size="medium" as='a' href={certificationRenar}>CERTIFICAT DE ACREDITARE Nr. LM 349</Button>
        </Grid.Row>
        <Grid.Row>
          <Button primary size="medium" as='a' href={certificationAnnex}>Anexa la Certificatul de Acreditare nr. LLM 349 din 7.09.2012</Button>
        </Grid.Row>
      </Grid>
    );
  }
}
export default Certification;