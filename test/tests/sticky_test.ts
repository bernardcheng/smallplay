/// <reference path="declaration.ts" />

'use strict';

import { Sticky } from '../../src/sticky';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';


describe('A sticky behavior', function() {
  let stickyInstance;
  let headerEl, startEl;
  let body;
  let main;

  before(function() {
    addDefaultCSS();
  });

  beforeEach(function(done) {
    setTimeout(function() {
      addDefaultHTML();
      stickyInstance = new Sticky();
      done();
    });
  });

  it('should appear while scrolling y-axis to 700', function(done) {
    window.scrollTo(0, 700);
    setTimeout(function() {
      expect(headerEl.classList.contains('active')).to.be.true;
      done();
    }, 1000);
  });

  it('should not appear while scrolling y-axis to 100', function(done) {
    window.scrollTo(0, 100);
    setTimeout(function() {
      expect(headerEl.classList.contains('active')).to.be.false;
      done();
    }, 1000);
  });

  afterEach(function() {
    stickyInstance = null;
    window.scrollTo(0, 0);
    setTimeout(function() {
      let mainNode = document.getElementsByTagName('main')[0];
      body.removeChild(mainNode);
    });
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

  function addDefaultHTML() {
    body = document.body;
    main = document.createElement('main');
    main.innerHTML = __html__['test/browser/index.html'];
    body.insertBefore(main, body.firstChild);
    headerEl = document.getElementById('sp-sticky-target');
    startEl = document.getElementById('sp-sticky-start');
  }
});
