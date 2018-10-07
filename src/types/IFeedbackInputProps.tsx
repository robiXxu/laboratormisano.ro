import { SyntheticEvent } from 'react';
import { DropdownProps } from 'semantic-ui-react';

interface IFeedbackInputProps {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: SyntheticEvent<HTMLElement>, data: DropdownProps);
};

export default IFeedbackInputProps;