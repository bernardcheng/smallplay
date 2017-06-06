(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sticky_1 = require("./sticky");
const progress_1 = require("./progress");
/**
 * @experimental
 */
class Application {
    constructor() {
    }
    runInitializer() {
        new sticky_1.Sticky();
        new progress_1.Progress();
    }
}
exports.Application = Application;
new Application();

},{"./progress":2,"./sticky":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Progress {
    constructor() {
        this.targetEl = document.getElementById('sp-progress-bar');
        console.log('test');
    }
}
exports.Progress = Progress;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initMonitor() {
    window.addEventListener('scroll', function () {
        console.log('test');
    });
}
class Sticky {
    constructor() {
        console.log('test');
    }
}
exports.Sticky = Sticky;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9wcm9ncmVzcy50cyIsInNyYy9zdGlja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFnQztBQUNoQyx5Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSDtJQUNFO0lBRUEsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ2IsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBVEQsa0NBU0M7QUFFRCxJQUFJLFdBQVcsRUFBRSxDQUFDOzs7OztBQ2pCbEI7SUFHRTtRQUZRLGFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFHNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFORCw0QkFNQzs7Ozs7QUNORDtJQUNFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDtJQUNFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFKRCx3QkFJQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1N0aWNreX0gZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAnLi9wcm9ncmVzcyc7XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcnVuSW5pdGlhbGl6ZXIoKSB7XG4gICAgbmV3IFN0aWNreSgpO1xuICAgIG5ldyBQcm9ncmVzcygpO1xuICB9XG59XG5cbm5ldyBBcHBsaWNhdGlvbigpO1xuIiwiZXhwb3J0IGNsYXNzIFByb2dyZXNzIHtcbiAgcHJpdmF0ZSB0YXJnZXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcC1wcm9ncmVzcy1iYXInKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBpbml0TW9uaXRvcigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgU3RpY2t5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgfVxufVxuIl19
