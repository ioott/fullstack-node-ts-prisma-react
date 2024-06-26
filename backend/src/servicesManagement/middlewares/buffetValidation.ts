import { Joi } from "celebrate";

export const createBuffetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  active: Joi.boolean(),
  events: Joi.array().items(Joi.number()),
  durations: Joi.array().items(Joi.number()).required(),
  guestsQtts: Joi.array().items(Joi.number()).required(),
});

export const updateBuffetSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  active: Joi.boolean(),
  events: Joi.array().items(Joi.number()),
  durations: Joi.array().items(Joi.number()),
  guestsQtts: Joi.array().items(Joi.number()),
});


export async function validateData(data: any, schema: Joi.Schema):
Promise<{ isValid: boolean; errors?: string[] }> {

  try {
    await schema.validateAsync(data);
    return { isValid: true };

  } catch (error) {
    const errors = error.details.map((detail: any) => detail.message);
    return { isValid: false, errors };
  }
}
