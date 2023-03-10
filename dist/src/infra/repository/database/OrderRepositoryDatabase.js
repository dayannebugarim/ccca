"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class OrderRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    save(order) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const [orderData] = yield this.connection.query("INSERT INTO ccca.order (code, cpf, issue_date, freight, sequence, coupon) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [order.getCode(), order.getCpf(), order.date, order.getFreight(), order.sequence, (_a = order.coupon) === null || _a === void 0 ? void 0 : _a.code]);
            for (const orderItem of order.getOrderItems()) {
                yield this.connection.query("INSERT INTO ccca.order_item (id_item, id_order, price, quantity) VALUES ($1, $2, $3, $4)", [orderItem.idItem, orderData.id_order, orderItem.price, orderItem.quantity]);
            }
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            const [orderData] = yield this.connection.query("SELECT COUNT(*)::int AS count FROM ccca.order", []);
            return orderData.count;
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.query("DELETE FROM ccca.order_item", []);
            yield this.connection.query("DELETE FROM ccca.order", []);
        });
    }
}
exports.default = OrderRepositoryDatabase;
