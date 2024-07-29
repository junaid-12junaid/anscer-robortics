import { body, ValidationChain, validationResult } from 'express-validator';

const validateState: ValidationChain[] = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name is required'),
  body('description')
    .isString()
    .withMessage('Description must be a string')
    .notEmpty()
    .withMessage('Description is required'),
  body('status')
    .isString()
    .withMessage('Status must be a string')
    .notEmpty()
    .withMessage('Status is required'),
  body('createdBy')
    .isString()
    .withMessage('CreatedBy must be a string')
    .notEmpty()
    .withMessage('CreatedBy is required'),
];

const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateState, validate };
