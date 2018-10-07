import * as React from 'react';
import { Form, Button, Container, Message } from 'semantic-ui-react';
import { isNumber, find } from 'lodash';
import { fetch } from 'whatwg-fetch';

import * as feedbackFormData from '../../static/feedbackForm.json';
import { IFeedbackState } from '../../types';
import { FeedbackInput } from '../';

class Feedback extends React.PureComponent<{}, IFeedbackState> {
  constructor(props) {
    super(props);
    // @ts-ignore
    this.state = initState();
  }

  private handleChange = (e, { id, value }) => {
    const obj = {};
    obj[id] = value;
    this.setState(obj);
  };

  private onSubmit = (e, kk) => {
    if (
      this.state.name.trim().length > 0 &&
      this.state.collaborationTime.trim().length > 0
    ) {
      this.setState({ 
        error: false,
        loading: true
      });
      this.sendRequest();
    } else {
      this.setState({ 
        error: true,
        errorMsg: "Va rugam completati toate campurile marcate cu *",
        loading: false
      });
    }
  };

  private sendRequest = () => {
    const self = this;
    fetch('/feedback.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        n: this.state.collaborationTime,
        D2: this.state.competence,
        D3: this.state.promptitude,
        D4: this.state.quality,
        D5: this.state.price, 
        D6: this.state.communication,
        comments: this.state.other,
        email: this.state.email
      })
    })
    .then((response) => {
      if(response.status === 200) {
        self.setState({
          error: false,
          loading: false,
        });
      } else {
        self.setState({ 
          error: true,
          errorMsg: "Eroare la trimiterea Chestionarului. Va rugam incercati mai tarziu!",
          loading: false
        });
      }
    })
    .catch((err) => {
      self.setState({ 
        error: true,
        errorMsg: "Eroare la trimiterea Chestionarului. Va rugam incercati mai tarziu!",
        loading: false
      });
      console.error(err);
    });
  }

  public render() {
    return (
      <Container text>
        <Form
          error={this.state.error}
          loading={this.state.loading}
          onSubmit={this.onSubmit}
        >
          <Message
            error
            header="Eroare!"
            content={ this.state.errorMsg }
          />
          {feedbackFormData.inputs.map(input => (
            <FeedbackInput
              key={input.variable}
              name={input.variable}
              label={input.label}
              value={this.state[input.variable]}
              type={input.type}
              onChange={this.handleChange}
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
