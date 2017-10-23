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
        this.stickyMonitor = (e) => {
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
        window.addEventListener('scroll', this.stickyMonitor, false);
    }
}
exports.Sticky = Sticky;
exports.default = Sticky;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9wcm9ncmVzcy50cyIsInNyYy9zdGlja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFnQztBQUNoQyx5Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSDtJQUdFLFlBQVksU0FBZTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQWJELGtDQWFDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7Ozs7QUNyQjVCO0lBR0U7UUFGUSxhQUFRLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBR25FLENBQUM7Q0FDRjtBQUxELDRCQUtDOzs7OztBQ0xEO0lBUUUsWUFBWSxTQUFlO1FBTG5CLFFBQUcsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQy9CLFNBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBb0JyQixrQkFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxTQUFTLEdBQ1QsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUM5RCxDQUFDLENBQUMsQ0FBQztZQUVaLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDO1FBckJBLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRXhELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBU0Y7QUEvQkQsd0JBK0JDO0FBRUQsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7U3RpY2t5fSBmcm9tICcuL3N0aWNreSc7XG5pbXBvcnQge1Byb2dyZXNzfSBmcm9tICcuL3Byb2dyZXNzJztcblxuLyoqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIHByaXZhdGUgY29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3B0Q29uZmlnPzogYW55KSB7XG4gICAgdGhpcy5jb25maWcgPSBvcHRDb25maWcgfHwge307XG5cbiAgICB0aGlzLnJ1bkluaXRpYWxpemVyKCk7XG4gIH1cblxuICBydW5Jbml0aWFsaXplcigpIHtcbiAgICBuZXcgU3RpY2t5KHRoaXMuY29uZmlnKTtcbiAgICBuZXcgUHJvZ3Jlc3MoKTtcbiAgfVxufVxuXG5sZXQgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCk7XG4iLCJleHBvcnQgY2xhc3MgUHJvZ3Jlc3Mge1xuICBwcml2YXRlIHRhcmdldEVsOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3AtcHJvZ3Jlc3MtYmFyJyk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdGlja3kge1xuICBwcml2YXRlIGNvbmZpZzogYW55O1xuICBwcml2YXRlIHRhcmdldEVsOiBhbnk7XG4gIHByaXZhdGUgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBwcml2YXRlIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBwcml2YXRlIHN0YXJ0RWw6IGFueTtcbiAgcHJpdmF0ZSBzdGFydE9mZnNldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9wdENvbmZpZz86IGFueSkge1xuICAgIHRoaXMuY29uZmlnID0gb3B0Q29uZmlnIHx8IHt9O1xuICAgIHRoaXMudGFyZ2V0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Atc3RpY2t5LXRhcmdldCcpO1xuICAgIHRoaXMuc3RhcnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1zdGlja3ktc3RhcnQnKTtcblxuICAgIGlmICh0aGlzLnRhcmdldEVsICYmIHRoaXMuc3RhcnRFbCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuc3RhcnRPZmZzZXQgPSB0aGlzLnN0YXJ0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zdGlja3lNb25pdG9yLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHN0aWNreU1vbml0b3IgPSAoZSkgPT4ge1xuICAgIGxldCBkb2NIZWlnaHQ6IG51bWJlciA9XG4gICAgICAgICh0aGlzLmRvYyAmJiB0aGlzLmRvYy5zY3JvbGxUb3AgfHwgdGhpcy5ib2R5ICYmIHRoaXMuYm9keS5zY3JvbGxUb3AgfHxcbiAgICAgICAgICAgICAwKTtcblxuICAgIHRoaXMudGFyZ2V0RWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgZG9jSGVpZ2h0ID4gdGhpcy5zdGFydE9mZnNldC50b3ApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGlja3k7XG4iXX0=
