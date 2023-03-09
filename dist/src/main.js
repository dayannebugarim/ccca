"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseRepositoryFactory_1 = __importDefault(require("./infra/factory/DatabaseRepositoryFactory"));
const ExpressAdapter_1 = __importDefault(require("./infra/http/ExpressAdapter"));
const RouteConfig_1 = __importDefault(require("./infra/http/RouteConfig"));
const repositoryFactory = new DatabaseRepositoryFactory_1.default();
const expressAdapter = new ExpressAdapter_1.default();
new RouteConfig_1.default(expressAdapter, repositoryFactory);
expressAdapter.listen(3000);
