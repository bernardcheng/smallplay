export class Sticky {
  private config: any;
  private targetEl: any;
  private doc = document.documentElement;
  private body = document.body;
  private startEl: any;
  private startOffset: any;

  constructor(optConfig?: any) {
    this.config = optConfig || {};
    this.targetEl = document.getElementById('sp-sticky-target');
    this.startEl = document.getElementById('sp-sticky-start');

    if (this.targetEl && this.startEl) {
      this.init();
    }
  }

  private init() {
    this.startOffset = this.startEl.getBoundingClientRect();

    window.addEventListener('scroll', this.stickyMonitor, false);
  }

  private stickyMonitor = (e) => {
    let docHeight: number =
        (this.doc && this.doc.scrollTop || this.body && this.body.scrollTop ||
             0);

    this.targetEl.classList.toggle('active', docHeight > this.startOffset.top);
  };
}

export default Sticky;
