import run from '../src/sticky';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = run();
    expect(result).to.equal('Start running sticky');
  });
});

