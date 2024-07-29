"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stateController_1 = require("../controllers/stateController");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
router.post('/states', validation_1.validateState, validation_1.validate, stateController_1.createState);
router.get('/states', stateController_1.getStates);
router.get('/states/:id', stateController_1.getStateById);
router.put('/states/:id', validation_1.validateState, validation_1.validate, stateController_1.updateState);
router.delete('/states/:id', stateController_1.deleteState);
exports.default = router;
