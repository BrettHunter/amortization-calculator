import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../../src/reducers/input';
import * as types from '../../src/constants/ActionTypes';

describe('input reducer', () => {
  it('should return the initial state', () => {
    const reducerResult = reducer(undefined, {});

    expect(
      reducerResult
    ).to.deep.contain(
      {
        default: true,
        loanAmount: 100000,
        interestRate: 4,
        term: 10,
        isMortgage: false,
        taxRate: 1.5,
        insuranceAmount: 100,
      }
    );

    expect(
      reducerResult.amortization
    ).to.be.empty;

    expect(
      reducerResult.beginDate
    ).to.be.instanceof(Date);
  });

  it('should handle RESET_AMORTIZATION', () => {
    const reducerResult = reducer(undefined, {
      type: types.RESET_AMORTIZATION,
    });

    expect(
      reducerResult
    ).to.deep.contain(
      {
        default: true,
        loanAmount: '',
        interestRate: '',
        term: '',
        beginDate: null,
        isMortgage: false,
        taxRate: 1.5,
        insuranceAmount: 100,
      }
    );

    expect(
      reducerResult.amortization
    ).to.be.empty;
  });

  it('should handle SET_BEGIN_DATE', () => {
    const expectedDate = new Date();
    const reducerResult = reducer(undefined, {
      type: types.SET_BEGIN_DATE,
      date: expectedDate,
    });

    expect(
      reducerResult.beginDate
    ).to.equal(
      expectedDate
    );

    expect(
      reducerResult.beginDate
    ).to.not.equal(
      new Date()
    );
  });

  it('should handle UPDATE_AMORTIZATION', () => {
    const reducerResult = reducer(undefined, {
      type: types.UPDATE_AMORTIZATION,
    });

    expect(
      reducerResult.amortization.length
    ).to.equal(
      120
    );

    expect(
      Object.keys(reducerResult.amortization[0]).length
    ).to.equal(
      10
    );

    expect(
      reducerResult.amortization[0].paymentNumber
    ).to.equal(
      1
    );

    expect(
      reducerResult.amortization[0].payment
    ).to.equal(
      1012.45
    );

    expect(
      Object.keys(reducerResult.amortization[119]).length
    ).to.equal(
      10
    );

    expect(
      reducerResult.amortization[119].paymentNumber
    ).to.equal(
      120
    );

    expect(
      reducerResult.amortization[119].payment
    ).to.equal(
      1012.45
    );
  });
});
