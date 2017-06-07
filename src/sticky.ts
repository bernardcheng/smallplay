export class Sticky {
  private config: any;
  private targetEl: any;
  private doc = document.documentElement;
  private body = document.body;
  private startEl: any;

  constructor(optConfig?: any) {
    this.config = optConfig || {};
    this.targetEl = document.getElementById('sp-sticky-target');
    this.startEl = document.getElementById('sp-sticky-start');

    this.init();
  }

  private init() {
    window.addEventListener('scroll', this.stickyMonitor);
  }

  private stickyMonitor = () => {
    let startOffset: any = this.startEl.getBoundingClientRect();
    let docHeight: number =
        (this.doc && this.doc.scrollTop || this.body && this.body.scrollTop || 0);

    this.targetEl.classList.toggle('active', docHeight > startOffset.top);
  };
}

export default Sticky;
