import { Sticky } from '../../src/sticky';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import * as jsdom from 'jsdom';
import 'mocha';

describe('A sticky behavior', () => {
  const HTML =
      '<head>' +
      '  <link rel="stylesheet" href="../browser/stylesheets/common.css">' +
      '</head>' +
      '<body>' +
      '<header id="sp-sticky-target" class="sticky-header-test">' +
      '  Sticky Header' +
      '</header>' +
      '<div id="sp-sticky-start" class="sticky-start-test">' +
      '  After me, then show' +
      '</div>' +
      '</body>';
  const { JSDOM } = jsdom;
  const dom = new JSDOM(HTML, {
    contentType: "text/html",
    resources: 'usable',
    includeNodeLocations: true
  });

  let window, document, stickyInstance, headerEl, startEl;

  beforeEach(() => {
    window = dom.window;
    document = dom.window.document;
    headerEl = document.getElementById('sp-sticky-target');
    startEl = document.getElementById('sp-sticky-start');
    stickyInstance = new Sticky();
  });

  it('should return hello world', () => {
    expect(stickyInstance.result()).to.equal('Sticky');
  });

  afterEach(() => {

  });
});

