class Sticky {
  constructor() {
    console.log('test');
  }
}

export function runSticky() {
  new Sticky();
}

export default runSticky;
