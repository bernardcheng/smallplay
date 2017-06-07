(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sticky_1 = require("./sticky");
const progress_1 = require("./progress");
/**
 * @experimental
 */
class Application {
    constructor(optConfig) {
        this.config = optConfig || {};
        this.runInitializer();
    }
    runInitializer() {
        new sticky_1.Sticky(this.config);
        new progress_1.Progress();
    }
}
exports.Application = Application;
let app = new Application();

},{"./progress":2,"./sticky":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Progress {
    constructor() {
        this.targetEl = document.getElementById('sp-progress-bar');
    }
}
exports.Progress = Progress;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sticky {
    constructor(optConfig) {
        this.doc = document.documentElement;
        this.body = document.body;
        this.stickyMonitor = () => {
            let docHeight = (this.doc && this.doc.scrollTop || this.body && this.body.scrollTop ||
                0);
            this.targetEl.classList.toggle('active', docHeight > this.startOffset.top);
        };
        this.config = optConfig || {};
        this.targetEl = document.getElementById('sp-sticky-target');
        this.startEl = document.getElementById('sp-sticky-start');
        if (this.targetEl && this.startEl) {
            this.init();
        }
    }
    init() {
        this.startOffset = this.startEl.getBoundingClientRect();
        window.addEventListener('scroll', this.stickyMonitor);
    }
    result() {
        return 'Sticky';
    }
    ;
}
exports.Sticky = Sticky;
exports.default = Sticky;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9wcm9ncmVzcy50cyIsInNyYy9zdGlja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFnQztBQUNoQyx5Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSDtJQUdFLFlBQVksU0FBZTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQWJELGtDQWFDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7Ozs7QUNyQjVCO0lBR0U7UUFGUSxhQUFRLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBR25FLENBQUM7Q0FDRjtBQUxELDRCQUtDOzs7OztBQ0xEO0lBUUUsWUFBWSxTQUFlO1FBTG5CLFFBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQy9CLFNBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBb0JyQixrQkFBYSxHQUFHO1lBQ3RCLElBQUksU0FBUyxHQUNULENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztnQkFDOUQsQ0FBQyxDQUFDLENBQUM7WUFFWixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQztRQXJCQSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFMUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUV4RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBVUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7Q0FDSDtBQW5DRCx3QkFtQ0M7QUFFRCxrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtTdGlja3l9IGZyb20gJy4vc3RpY2t5JztcbmltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gJy4vcHJvZ3Jlc3MnO1xuXG4vKipcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgcHJpdmF0ZSBjb25maWc6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvcHRDb25maWc/OiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG9wdENvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMucnVuSW5pdGlhbGl6ZXIoKTtcbiAgfVxuXG4gIHJ1bkluaXRpYWxpemVyKCkge1xuICAgIG5ldyBTdGlja3kodGhpcy5jb25maWcpO1xuICAgIG5ldyBQcm9ncmVzcygpO1xuICB9XG59XG5cbmxldCBhcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcbiIsImV4cG9ydCBjbGFzcyBQcm9ncmVzcyB7XG4gIHByaXZhdGUgdGFyZ2V0RWw6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1wcm9ncmVzcy1iYXInKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0aWNreSB7XG4gIHByaXZhdGUgY29uZmlnOiBhbnk7XG4gIHByaXZhdGUgdGFyZ2V0RWw6IGFueTtcbiAgcHJpdmF0ZSBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHByaXZhdGUgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHByaXZhdGUgc3RhcnRFbDogYW55O1xuICBwcml2YXRlIHN0YXJ0T2Zmc2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3B0Q29uZmlnPzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRDb25maWcgfHwge307XG4gICAgdGhpcy50YXJnZXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgdGhpcy5zdGFydEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwLXN0aWNreS1zdGFydCcpO1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0RWwgJiYgdGhpcy5zdGFydEVsKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5zdGFydE9mZnNldCA9IHRoaXMuc3RhcnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnN0aWNreU1vbml0b3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGlja3lNb25pdG9yID0gKCkgPT4ge1xuICAgIGxldCBkb2NIZWlnaHQ6IG51bWJlciA9XG4gICAgICAgICh0aGlzLmRvYyAmJiB0aGlzLmRvYy5zY3JvbGxUb3AgfHwgdGhpcy5ib2R5ICYmIHRoaXMuYm9keS5zY3JvbGxUb3AgfHxcbiAgICAgICAgICAgICAwKTtcblxuICAgIHRoaXMudGFyZ2V0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgZG9jSGVpZ2h0ID4gdGhpcy5zdGFydE9mZnNldC50b3ApO1xuICB9O1xuXG4gIHJlc3VsdCgpIHtcbiAgICByZXR1cm4gJ1N0aWNreSc7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0aWNreTtcbiJdfQ==
