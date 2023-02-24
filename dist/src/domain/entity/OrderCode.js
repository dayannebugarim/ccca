"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderCode {
    constructor(date, sequence) {
        const year = date.getFullYear();
        this.value = `${year}${sequence.toString().padStart(8, "0")}`;
    }
}
exports.default = OrderCode;
