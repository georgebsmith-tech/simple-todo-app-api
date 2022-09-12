import Joi from "joi";

const Schema = Joi.object({
  title: Joi.string().required()
});

export const addTaskValidator = Schema;
