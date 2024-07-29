import express from 'express';

import connectDB from './config/database';
import stateRoutes from './routes/stateRoutes';

const app = express();

// Middleware
app.use(express.json());


// Database connection
connectDB();

// Routes
app.use('/api', stateRoutes);

export default app;
