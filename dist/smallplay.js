"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sticky_1 = require("./sticky");
var progress_1 = require("./progress");
console.log(sticky_1.runSticky());
console.log(progress_1.runProgress());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runSticky() {
    return 'Start running sticky';
}
exports.runSticky = runSticky;
exports.default = runSticky;
