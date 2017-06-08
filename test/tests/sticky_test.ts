import { Sticky } from '../../src/sticky';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('A sticky behavior', () => {
  let stickyInstance, headerEl, startEl;

  before(() => {
    // document.body.innerHTML = window.__html__['test/browser/index.html'];
  });

  beforeEach(() => {
    headerEl = document.getElementById('sp-sticky-target');
    startEl = document.getElementById('sp-sticky-start');
    stickyInstance = new Sticky();
  });

  it('should return hello world', () => {
    window.scrollTo(0, 500);
    expect(stickyInstance.result()).to.equal('Sticky');
  });

  afterEach(() => {

  });
});
