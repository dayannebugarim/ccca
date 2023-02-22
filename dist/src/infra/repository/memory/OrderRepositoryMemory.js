"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderRepositoyMemory {
    constructor() {
        this.orders = [];
    }
    save(order) {
        this.orders.push(order);
        return Promise.resolve();
    }
}
exports.default = OrderRepositoyMemory;
