interface IFeedbackState {
  name: string;
  collaborationTime: string;
  competence: string;
  promptitude: string;
  quality: string;
  price: string;
  communication: string;
  other: string;
  email: string;
  error: boolean;
  errorMsg: string;
  loading: boolean;
};

export default IFeedbackState;