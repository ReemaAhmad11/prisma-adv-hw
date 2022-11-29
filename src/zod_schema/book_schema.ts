import {z} from "zod"

//ID , name , genre

export const getBookSchema=z.object({
    params:z.object({
        userid: z.string({invalid_type_error:"User id is required"}),
    })
})

export const addNewBookSchema=z.object({
    body:z.object({
        name:z.string({invalid_type_error:"Book Name is requierd"}),
        gener:z.string({invalid_type_error:"Gener is requierd"})
    })
})