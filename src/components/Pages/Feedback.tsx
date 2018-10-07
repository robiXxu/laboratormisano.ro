import * as React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { isNumber, find } from 'lodash';
import * as feedbackFormData from '../../static/feedbackForm.json';

import { IFeedbackState } from '../../types';
import { FeedbackInput } from '../';

class Feedback extends React.PureComponent<{}, IFeedbackState | {}> {
  constructor(props) {
    super(props);
    this.state = initState();
  }

  public handleChange = (e, { id, value }) => {
    console.log(id, value);
    const obj = {};
    obj[id] = value;
    this.setState(obj);
  }

  public render() {
    return (
      <Container text>
        <Form>
          {feedbackFormData.inputs.map(input => (
            <FeedbackInput
              key={input.variable}
              name={input.variable}
              label={input.label}
              value={ this.state[input.variable] }
              type={input.type}
              onChange={ this.handleChange }
            />
          ))}
          <Button type="submit">Trimite</Button>
        </Form>
      </Container>
    );
  }
}

export default Feedback;

const initState = () => {
  const defaultState = {};
  feedbackFormData.inputs.forEach(input => {
    if (isNumber(input.defaultValue)) {
      const option = find(feedbackFormData.dropdownOptions, {
        key: input.defaultValue
      });
      if (option) {
        defaultState[input.variable] = option.value;
      } else {
        defaultState[input.variable] = '';
      }
    } else {
      defaultState[input.variable] = input.defaultValue;
    }
  });
  return defaultState;
};
