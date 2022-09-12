import { NextFunction, Response, Request } from "express";
import { Task } from "../../models";
import { changeStatusValidator } from "../../validators";

export const changeStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, value } = changeStatusValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: { message: error.details[0].message }
      });
    }
    const { id: _id } = req.params;

    const task = await Task.findOneAndUpdate({ _id }, value, { new: true });
    return res.status(201).json({ status: "success", data: task });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
