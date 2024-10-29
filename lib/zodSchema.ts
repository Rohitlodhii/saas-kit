import { z } from "zod";


export const signUpSchema = z.object({
    
    email : z.string().email() ,
    password : z.string().min(6 , "Password Should be min 6 Chars")

})

export const signInSchema = z.object({
    
    email : z.string().email() ,
    password : z.string().min(6 , "Password Should be min 6 Chars")

})


export const verificationSchema = z.object({
    code : z.number().int().min(100000 , "Code is 6 digits").max(999999 , "Code is 6 Digits")
})


