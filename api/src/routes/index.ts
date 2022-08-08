import { Router } from "express";

import {
  createDeveloper,
  getAllDevelopers,
  updateDeveloper,
  deleteDeveloper,
} from "../controllers/developerController";
import { validateId } from "../middlewares/DeveloperMiddleware";

const router = Router();

router.get("/developers", getAllDevelopers);
router.post("/developers", createDeveloper);
router.put("/developers/:id", validateId, updateDeveloper);
router.delete("/developers/:id", validateId, deleteDeveloper);

export { router };
