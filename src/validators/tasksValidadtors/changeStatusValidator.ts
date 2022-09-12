import Joi from "joi";

const Schema = Joi.object({
  status: Joi.string().valid("completed", "pending", "in progress").required()
});

export const changeStatusValidator = Schema;
