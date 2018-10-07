import * as React from 'react';
import { Form, Dropdown, Input, TextArea } from 'semantic-ui-react';
import { IFeedbackInputProps } from '../../types';
import * as feedbackFormData from '../../static/feedbackForm.json';

class FeedbackInput extends React.PureComponent<IFeedbackInputProps> {
  public render() {
    switch (this.props.type) {
      case 'dropdown':
        return (
          <Form.Field>
            <label>{this.props.label}</label>
            <Dropdown
              id={this.props.name}
              onChange={this.props.onChange}
              options={feedbackFormData.dropdownOptions}
              value={this.props.value}
            />
          </Form.Field>
        );
      case 'textArea':
        return (
          <Form.Field>
            <label>{this.props.label}</label>
            <TextArea
              id={this.props.name}
              value={this.props.value}
              onChange={this.props.onChange}
              autoHeight
            />
          </Form.Field>
        );
      default:
        return (
          <Form.Field>
            <label>{this.props.label}</label>
            <Input
              id={this.props.name}
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </Form.Field>
        );
    }
  }
}

export default FeedbackInput;
