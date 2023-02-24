"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderCode_1 = __importDefault(require("../../src/domain/entity/OrderCode"));
test("Deve criar um código de pedido", function () {
    const date = new Date("2020-10-01");
    const sequence = 1;
    const orderCode = new OrderCode_1.default(date, sequence);
    const value = orderCode.value;
    expect(value).toBe("202000000001");
});
