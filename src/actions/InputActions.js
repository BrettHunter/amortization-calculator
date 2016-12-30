import {
  UPDATE_AMORTIZATION,
  RESET_AMORTIZATION,
  SET_BEGIN_DATE
} from '../constants/ActionTypes';

export const updateAmortization = () => {
  return {
    type: UPDATE_AMORTIZATION
  };
};

export const resetAmortization = () => {
  return {
    type: RESET_AMORTIZATION
  };
};

export const setBeginDate = (event, date) => {
  return {
    type: SET_BEGIN_DATE,
    date
  };
};
