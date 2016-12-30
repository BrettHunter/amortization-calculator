import input from './input';
import { combineForms } from 'react-redux-form';

const rootReducer = combineForms({
  input,
});

export default rootReducer;
