import {Sticky} from './sticky';
import {Progress} from './progress';

/**
 * @experimental
 */
export class Application {
  constructor() {

  }

  runInitializer() {
    new Sticky();
    new Progress();
  }
}

new Application();
