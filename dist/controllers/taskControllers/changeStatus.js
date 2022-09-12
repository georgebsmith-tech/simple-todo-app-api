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
exports.changeStatus = void 0;
const models_1 = require("../../models");
const validators_1 = require("../../validators");
const changeStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = validators_1.changeStatusValidator.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: { message: error.details[0].message }
            });
        }
        const { id: _id } = req.params;
        const task = yield models_1.Task.findOneAndUpdate({ _id }, value, { new: true });
        return res.status(201).json({ status: "success", data: task });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.changeStatus = changeStatus;
