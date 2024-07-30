import { matchedData, validationResult } from "express-validator";

const validateMiddleware = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty())
    return res.status(400).json({ errors: result.array() });

  req.data = matchedData(req);

  next();
};

export default validateMiddleware;
