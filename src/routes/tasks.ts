import { Router } from "express";

import { addTask, changeStatus, getAllTasks } from "../controllers";

const router = Router();

router.get("/", getAllTasks);

router.post("/", addTask);
router.patch("/:id", changeStatus);

export const tasksRoutes = router;
