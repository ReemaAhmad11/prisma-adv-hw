import { z } from "zod";

//id , username , password
export const getUserSchema = z.object({
  params: z.object({
    boodid: z.string({ invalid_type_error: "User id is required" }),
  }),
});

export const addNewUserSchema = z.object({
  body: z.object({
    username: z.string({ invalid_type_error: "UserName id is requierd" }),
    password: z.string({ invalid_type_error: "PasswordiId requierd" }),
  }),
});

