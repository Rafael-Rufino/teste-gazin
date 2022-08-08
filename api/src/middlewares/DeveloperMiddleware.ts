import { NextFunction, Request, Response } from "express";

import { validate as IsUuid } from "uuid";

import Developer from "../models/developer";

const validateId = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!IsUuid(id)) {
    return res.status(400).json({
      error: "Invalid ID",
    });
  }

  try {
    const developer = await Developer.findById(id);
    res.developer = developer;

    if (!developer) {
      return res.status(404).json({
        error: "Developer not found",
      });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }

  next();
};

export { validateId };
