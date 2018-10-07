import * as React from 'react';
import { Card, Container } from 'semantic-ui-react';
import * as equipmentData from '../../static/equipment.json';
import { EquipmentCard } from '../';


class Equipment extends React.Component {
  public render() {
    return (
      <Container>
        <Card.Group stackable doubling centered>
          {
            equipmentData.map((eData, eIndex) => (
              <EquipmentCard key={ eIndex } { ...eData }/>
            ))
          }
        </Card.Group>
      </Container>
    );
  }
}

export default Equipment;
