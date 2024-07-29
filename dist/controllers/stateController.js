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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.getStateById = exports.getStates = exports.createState = void 0;
const state_1 = __importDefault(require("../models/state"));
// Create a new state
const createState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, status, createdBy } = req.body;
        const newState = new state_1.default({ name, description, status, createdBy });
        yield newState.save();
        res.status(201).json(newState);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.createState = createState;
// Get all states
const getStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield state_1.default.find();
        res.status(200).json(states);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.getStates = getStates;
// Get a single state by ID
const getStateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const state = yield state_1.default.findById(req.params.id);
        if (!state) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.status(200).json(state);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.getStateById = getStateById;
// Update a state by ID
const updateState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedState = yield state_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedState) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.status(200).json(updatedState);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.updateState = updateState;
// Delete a state by ID
const deleteState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedState = yield state_1.default.findByIdAndDelete(req.params.id);
        if (!deletedState) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.status(200).json({ message: 'State deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.deleteState = deleteState;
