"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const stateRoutes_1 = __importDefault(require("./routes/stateRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Database connection
(0, database_1.default)();
// Routes
app.use('/api', stateRoutes_1.default);
exports.default = app;
