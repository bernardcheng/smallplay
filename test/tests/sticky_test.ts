/// <reference path="declaration.ts" />

'use strict';

import { Sticky } from '../../src/sticky';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';


describe('A sticky behavior', () => {
  let stickyInstance, headerEl, startEl;
  addDefaultCSS();

  beforeEach(() => {
    document.body.innerHTML = __html__['test/browser/index.html'];
    headerEl = document.getElementById('sp-sticky-target');
    startEl = document.getElementById('sp-sticky-start');
    stickyInstance = new Sticky();
  });

  it('should appear while scrolling y-axis to 700', () => {
    window.scrollTo(0, 700);

    expect(headerEl.classList.contains('active')).to.be.true;
  });

  it('should not appear while scrolling y-axis to 100', () => {
    window.scrollTo(0, 100);

    expect(headerEl.classList.contains('active')).to.be.false;
  });

  afterEach(() => {
    let bodeNode = document.body;
    while (bodeNode.firstChild) {
       bodeNode.removeChild(bodeNode.firstChild);
    }
  });

  function addDefaultCSS() {
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'base/test/browser/stylesheets/common.css';
    link.media = 'all';
    head.appendChild(link);
  }
});
