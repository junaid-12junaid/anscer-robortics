import { Request, Response, NextFunction } from 'express';


// Example middleware for authentication
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

export { isAuthenticated };
