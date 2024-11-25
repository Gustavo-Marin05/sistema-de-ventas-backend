// este sera como un validador
//se asegurara que todos los datos que me pasen desde el front sean iguales al los que tienen que estar dentro del back
import { z } from "zod";

export const registerSchema = z.object({
  fullname: z.string({
    required_error: "fullname is required",
  }),
  username: z
    .string({
      required_error: "username is required",
    })
    .min(4, { message: "user name must be least 5 characters" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, { message: "passeord must be at least 6 characteres" }),
});

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
    })
    .min(4, { message: "user name must be least 5 characters" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(5, { message: "passeord must be at least 6 characteres" }),
});
