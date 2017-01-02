import {
  UPDATE_AMORTIZATION,
  RESET_AMORTIZATION,
  SET_BEGIN_DATE
} from '../constants/ActionTypes';

export const updateAmortization = () => ({
  type: UPDATE_AMORTIZATION
});

export const resetAmortization = () => ({
  type: RESET_AMORTIZATION
});

export const setBeginDate = (event, date) => ({
  type: SET_BEGIN_DATE,
  date
});
