import * as React from 'react';
import { Container, Grid, List, Image } from 'semantic-ui-react';
import * as QRCode from '../../static/images/QRCode.png';

class Contact extends React.Component {
  public render() {
    return (
      <Container text>
        <Grid columns="equal" divided stackable verticalAlign="middle">
          <Grid.Column>
            <List size="large">
              <List.Item
                icon="marker"
                content="Str. Dr. Ciuca nr 22, bloc 26, parter"
              />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:mirelasauca@yahoo.com">
                    mirelasauca@yahoo.com
                  </a>
                }
              />
              <List.Item
                icon="phone"
                content={<a href="tel:+40744544566">0744 544 566</a>}
              />
              <List.Item
                icon="home"
                content={<a href="tel:+40231541911">0231 541 911</a>}
              />
              <List.Item
                icon="fax"
                content={<a href="fax:0231541911">0231 541 911</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image src={QRCode} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
