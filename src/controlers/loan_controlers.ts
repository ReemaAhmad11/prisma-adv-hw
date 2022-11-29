import { prisma } from "../config/db";
import { Loans } from "@prisma/client";
import { Response, Request } from "express";
import { loanSchemaType } from '../zod_schema/loan_schema';

//Get loans
export const getLoans= async(res:Response ,req:Request)=>{
  try {
    const AllLoans = await prisma.loans.findMany();
    return res.status(200).json(AllLoans);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error !",
    });
  }
}

//Add loan 
export const addLoan= async(res:Response ,req:Request)=>{
  try {
    const NewLoan = req.body as Loans;
    await prisma.loans.create({ data: NewLoan });

    return res.status(201).json({
      message: "Laon added !",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error !",
    });
  }}

  // lend a book to user 
  export const lendBook = async(req:Request, res:Response) =>{
    const loanData = req.params as Loans;
    const isValid = prisma.users.findUnique({
        where: {id: loanData.id}
    });
    try{
       if (isValid != null){
            prisma.loans.create({
                data: loanData
            });
            res.status(200).json({message: 'Book lended to the user'})
       } else {
        return res.status(400).json({message: 'Not found user in this id'})
       }
    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Server error'})
    }
}

// return lended books 
export const lendedBooks = async(req:Request, res:Response) =>{
    const id = req.params as loanSchemaType;
    try{
        const lendBook = prisma.users.findMany({
            where: {
                // id: id
            } 
        })
        
    }catch(error){

    }
}