# Amortization Calculator

This is the code repository for an interactive, mobile-responsive, live-updating loan amortization calculator application created using React and Redux with ES6 Javascript.  

### Purpose

Amortization calculators found on Google do not provide real-time generation of amortization information and typically require a backend call and page refresh to view update generated amortized values.  It is more effective to utilize real-time DOM manipulation to quickly discern how loan parameters affect the amortization of loan payments.

### Usage

#### Demo

A deployed demo of this calculator can be viewed [here](https://amortizationcalculator.github.io/).

#### Installation

##### Prerequisites

The host system must have a recent (v.6+) version of [Node.js](https://nodejs.org/en/).

```
git clone https://github.com/BrettHunter/amortization-calculator.git
```
```
cd amortization-calculator
```
```
npm run prestart && npm run start
```
By default, the dev server will be bound to `:3000` and the application will be viewable at `http://localhost:3000/`.  If a different posrt is desired, the `--port` flag can be used to run the application with another port: `npm run start --port=3001`.

#### Testing & Linting

This app is configured with [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) style lintig and redux reducer testing.

`npm run test`
```
input reducer
    ✓ should return the initial state
    ✓ should handle RESET_AMORTIZATION
    ✓ should handle SET_BEGIN_DATE
    ✓ should handle UPDATE_AMORTIZATION
```

