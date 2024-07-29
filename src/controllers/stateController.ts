import { Request, Response } from 'express';
import State from '../models/state';

// Create a new state
const createState = async (req: Request, res: Response) => {
  try {
    const { name, description, status, createdBy } = req.body;
    const newState = new State({ name, description, status, createdBy });
    await newState.save();
    res.status(201).json(newState);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get all states
const getStates = async (req: Request, res: Response) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get a single state by ID
const getStateById = async (req: Request, res: Response) => {
  try {
    const state = await State.findById(req.params.id);
    if (!state) {
      return res.status(404).json({ message: 'State not found' });
    }
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Update a state by ID
const updateState = async (req: Request, res: Response) => {
  try {
    const updatedState = await State.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedState) {
      return res.status(404).json({ message: 'State not found' });
    }
    res.status(200).json(updatedState);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Delete a state by ID
const deleteState = async (req: Request, res: Response) => {
  try {
    const deletedState = await State.findByIdAndDelete(req.params.id);
    if (!deletedState) {
      return res.status(404).json({ message: 'State not found' });
    }
    res.status(200).json({ message: 'State deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export { createState, getStates, getStateById, updateState, deleteState };
