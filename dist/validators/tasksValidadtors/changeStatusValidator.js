"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatusValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const Schema = joi_1.default.object({
    status: joi_1.default.string().valid("completed", "pending", "in progress").required()
});
exports.changeStatusValidator = Schema;
