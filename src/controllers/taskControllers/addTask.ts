import { NextFunction, Response, Request } from "express";
import { Task } from "../../models";
import { addTaskValidator } from "../../validators";

export const addTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = addTaskValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }

    const task = await Task.create(value);
    return res.status(201).json({ status: "success", data: task });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
