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
            let startOffset = this.startEl.getBoundingClientRect();
            let docHeight = (this.doc && this.doc.scrollTop || this.body && this.body.scrollTop || 0);
            this.targetEl.classList.toggle('active', docHeight > startOffset.top);
        };
        this.config = optConfig || {};
        this.targetEl = document.getElementById('sp-sticky-target');
        this.startEl = document.getElementById('sp-sticky-start');
        this.init();
    }
    init() {
        window.addEventListener('scroll', this.stickyMonitor);
    }
}
exports.Sticky = Sticky;
exports.default = Sticky;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9wcm9ncmVzcy50cyIsInNyYy9zdGlja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFnQztBQUNoQyx5Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSDtJQUdFLFlBQVksU0FBZTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQWJELGtDQWFDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7Ozs7QUNyQjVCO0lBR0U7UUFGUSxhQUFRLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBR25FLENBQUM7Q0FDRjtBQUxELDRCQUtDOzs7OztBQ0xEO0lBT0UsWUFBWSxTQUFlO1FBSm5CLFFBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQy9CLFNBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBZXJCLGtCQUFhLEdBQUc7WUFDdEIsSUFBSSxXQUFXLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzVELElBQUksU0FBUyxHQUNULENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTlFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUM7UUFqQkEsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxJQUFJO1FBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQVNGO0FBMUJELHdCQTBCQztBQUVELGtCQUFlLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1N0aWNreX0gZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAnLi9wcm9ncmVzcyc7XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBwcml2YXRlIGNvbmZpZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdENvbmZpZz86IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gb3B0Q29uZmlnIHx8IHt9O1xuXG4gICAgdGhpcy5ydW5Jbml0aWFsaXplcigpO1xuICB9XG5cbiAgcnVuSW5pdGlhbGl6ZXIoKSB7XG4gICAgbmV3IFN0aWNreSh0aGlzLmNvbmZpZyk7XG4gICAgbmV3IFByb2dyZXNzKCk7XG4gIH1cbn1cblxubGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbigpO1xuIiwiZXhwb3J0IGNsYXNzIFByb2dyZXNzIHtcbiAgcHJpdmF0ZSB0YXJnZXRFbDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwLXByb2dyZXNzLWJhcicpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RpY2t5IHtcbiAgcHJpdmF0ZSBjb25maWc6IGFueTtcbiAgcHJpdmF0ZSB0YXJnZXRFbDogYW55O1xuICBwcml2YXRlIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgcHJpdmF0ZSBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgcHJpdmF0ZSBzdGFydEVsOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3B0Q29uZmlnPzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRDb25maWcgfHwge307XG4gICAgdGhpcy50YXJnZXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgdGhpcy5zdGFydEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwLXN0aWNreS1zdGFydCcpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc3RpY2t5TW9uaXRvcik7XG4gIH1cblxuICBwcml2YXRlIHN0aWNreU1vbml0b3IgPSAoKSA9PiB7XG4gICAgbGV0IHN0YXJ0T2Zmc2V0OiBhbnkgPSB0aGlzLnN0YXJ0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGRvY0hlaWdodDogbnVtYmVyID1cbiAgICAgICAgKHRoaXMuZG9jICYmIHRoaXMuZG9jLnNjcm9sbFRvcCB8fCB0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LnNjcm9sbFRvcCB8fCAwKTtcblxuICAgIHRoaXMudGFyZ2V0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgZG9jSGVpZ2h0ID4gc3RhcnRPZmZzZXQudG9wKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5O1xuIl19
