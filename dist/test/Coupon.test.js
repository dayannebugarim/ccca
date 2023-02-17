"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
test("Deve criar um cupom de desconto válido", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2021-12-10"));
    const today = new Date("2021-12-01");
    const isValid = coupon.isValid(today);
    expect(isValid).toBeTruthy();
});
test("Deve criar um cupom de desconto expirado", function () {
    const coupon = new Coupon_1.default("VALE20", 20, new Date("2021-03-01"));
    const today = new Date("2021-12-01");
    const isExpired = coupon.isExpired(today);
    expect(isExpired).toBeTruthy();
});
test("Deve criar um cupom de desconto válido e calcular o desconto", function () {
    const coupon = new Coupon_1.default("VALE20", 20);
    const discount = coupon.calculateDiscount(1000);
    expect(discount).toBe(200);
});
