"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.validateState = void 0;
const express_validator_1 = require("express-validator");
const validateState = [
    (0, express_validator_1.body)('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    (0, express_validator_1.body)('description')
        .isString()
        .withMessage('Description must be a string')
        .notEmpty()
        .withMessage('Description is required'),
    (0, express_validator_1.body)('status')
        .isString()
        .withMessage('Status must be a string')
        .notEmpty()
        .withMessage('Status is required'),
    (0, express_validator_1.body)('createdBy')
        .isString()
        .withMessage('CreatedBy must be a string')
        .notEmpty()
        .withMessage('CreatedBy is required'),
];
exports.validateState = validateState;
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validate = validate;
