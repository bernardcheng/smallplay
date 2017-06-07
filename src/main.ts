import {Sticky} from './sticky';
import {Progress} from './progress';

/**
 * @experimental
 */
export class Application {
  private config: any;

  constructor(optConfig?: any) {
    this.config = optConfig || {};

    this.runInitializer();
  }

  runInitializer() {
    new Sticky(this.config);
    new Progress();
  }
}

let app = new Application();
