import * as React from 'react';
import { Container, Icon, Label, Image } from 'semantic-ui-react';

const style = {
  span: {
    fontSize: '18px'
  }
};

class Footer extends React.PureComponent {
  public render() {
    return (
      <Container text textAlign="center">
        <span style={style.span}>Made with</span>
        <Icon name="like" />
        <span style={style.span}>by</span>
        <Label as="a" href="https://www.linkedin.com/in/schiriacrobert" image>
          <Image src="https://avatars0.githubusercontent.com/u/1962141?v=4" />
          Schiriac Robert
        </Label>
      </Container>
    );
  }
}

export default Footer;
