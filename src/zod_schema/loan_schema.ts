import { TypeOf, z } from "zod";

//ID , userId , bookID

export const getLoanSchema = z.object({
  params: z.object({
    loanid: z.string({ invalid_type_error: "Loan id is required" }),
  }),
});

export const addLoanSchema = z.object({
  body: z.object({
    userid: z.string({ invalid_type_error: "Book id is requierd" }),
    bookid: z.string({ invalid_type_error: "User id requierd" }),
  })
});

export const loanSchema = z.object({
  params: z.object({
     id: z.string({required_error: 'UserID is required'}),
  })
});
export type loanSchemaType = z.infer<typeof loanSchema>['params'];
