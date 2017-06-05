(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sticky_1 = require("./sticky");
const progress_1 = require("./progress");
console.log(sticky_1.runSticky());
console.log(progress_1.runProgress());

},{"./progress":2,"./sticky":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runProgress() {
    return 'Start running progress';
}
exports.runProgress = runProgress;
exports.default = runProgress;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sticky {
    constructor() {
        console.log('test');
    }
}
function runSticky() {
    new Sticky();
}
exports.runSticky = runSticky;
exports.default = runSticky;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9wcm9ncmVzcy50cyIsInNyYy9zdGlja3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFtQztBQUNuQyx5Q0FBdUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUyxFQUFFLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFXLEVBQUUsQ0FBQyxDQUFDOzs7OztBQ0ozQjtJQUNFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztBQUNsQyxDQUFDO0FBRkQsa0NBRUM7QUFFRCxrQkFBZSxXQUFXLENBQUM7Ozs7O0FDSjNCO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUVEO0lBQ0UsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFGRCw4QkFFQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge3J1blN0aWNreX0gZnJvbSAnLi9zdGlja3knO1xuaW1wb3J0IHtydW5Qcm9ncmVzc30gZnJvbSAnLi9wcm9ncmVzcyc7XG5cbmNvbnNvbGUubG9nKHJ1blN0aWNreSgpKTtcbmNvbnNvbGUubG9nKHJ1blByb2dyZXNzKCkpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1blByb2dyZXNzKCkge1xuICByZXR1cm4gJ1N0YXJ0IHJ1bm5pbmcgcHJvZ3Jlc3MnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBydW5Qcm9ncmVzcztcbiIsImNsYXNzIFN0aWNreSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blN0aWNreSgpIHtcbiAgbmV3IFN0aWNreSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBydW5TdGlja3k7XG4iXX0=
