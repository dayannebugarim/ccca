"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
test("Deve criar um pedido vazio com CPF válido", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
});
test("Deve tentar criar um pedido vazio com CPF inválido", function () {
    const cpf = "111.111.111-11";
    expect(() => new Order_1.default(cpf)).toThrow(new Error("Invalid cpf"));
});
test("Deve criar um pedido com 3 itens", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, "Música", "CD", 30), 3);
    order.addItem(new Item_1.default(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item_1.default(3, "Vídio", "VHS", 10), 2);
    const total = order.getTotal();
    expect(total).toBe(160);
});
test("Deve criar um pedido com 3 itens com um cupom de desconto", function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, "Música", "CD", 30), 3);
    order.addItem(new Item_1.default(2, "Vídeo", "DVD", 50), 1);
    order.addItem(new Item_1.default(3, "Vídio", "VHS", 10), 2);
    order.addCoupon(new Coupon_1.default("VALE20", 20));
    const total = order.getTotal();
    expect(total).toBe(128);
});
