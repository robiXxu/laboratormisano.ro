import * as React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import { IEquipmentCardProps } from '../../types';

class EquipmentCard extends React.PureComponent<IEquipmentCardProps> {
  public render() {
    const { image } = this.props;
    const img = require(`../../static/images/equipment/${image}`);
    return (
      <Card>
        <Image
          src={img}
          style={{
            width: 350,
            height: 200
          }}
          centered
        />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Label>{this.props.category}</Label>
        </Card.Content>
      </Card>
    );
  }
}

export default EquipmentCard;
