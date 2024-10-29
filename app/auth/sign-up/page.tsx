"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import CardWrapper from '../components/CardWrapper'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { IoReload } from "react-icons/io5";

import { signUpSchema, verificationSchema } from '@/lib/zodSchema'
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FaArrowLeft } from 'react-icons/fa'

const page = () => {

    const [isLoading ,setIsLoading] = useState(false)
    const [isVerify ,setIsVerify] = useState(false)
    const[codeVerify , setCodeVerify] = useState(false);

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver : zodResolver(signUpSchema),
        defaultValues : {
            email : "",
            password : "",
        }
    })
    const verform = useForm<z.infer<typeof verificationSchema>>({
        resolver : zodResolver(verificationSchema),
        defaultValues : {
           
        }
    })

    

    const onSubmit = (values : z.infer<typeof signUpSchema>) => {
        setIsLoading(true)
        setIsVerify(true)
        console.log(values);
        setIsLoading(false);
    }
    const onVerifySubmit = (values : z.infer<typeof verificationSchema>) => {
        setCodeVerify(true);
        console.log(values);
        setCodeVerify(false);
    }


  return (
    <div className='h-[100vh] flex flex-col items-center justify-center w-full'>

        {isVerify ?( 
            <Card>
                <CardHeader>
                    <CardTitle>Verification</CardTitle>
                    <CardDescription>Input code which is sended on email</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...verform}>
     
                         <form onSubmit={verform.handleSubmit(onVerifySubmit)} className='space-y-2'>

                        <FormField 
                            control={verform.control}
                            name='code'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Your 6 Digit Code.</FormLabel>
                                    <FormControl>
                                        <Input placeholder='123456' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
           
           {!codeVerify ? <Button className='w-full' type='submit' >Verify</Button>
      : <Button disabled>
      <IoReload className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
 }
                  

                             </form>

                      </Form>
                </CardContent>
                <CardFooter>
                    <div className='flex flex-col gap-2 w-full items-center justify-center'>
                        <div>Didnt received code ? ResendCode</div>
                        <Button variant={'outline'} className='w-full' onClick={()=>setIsVerify(false)} > <FaArrowLeft className='mx-1'/> Go Back</Button>
                    </div>
                </CardFooter>
            </Card>
         ) : ( 
             <CardWrapper
             title='SignUp'
             titleDesc='Create a new Account'
             showIcons={true}
             isLogin={false}
             
           >
                 <div>
                     <Form {...form}>
     
                     <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
     
                             <FormField 
                                 control={form.control}
                                 name='email'
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Email</FormLabel>
                                         <FormControl>
                                             <Input placeholder='example@example.com' {...field} />
                                         </FormControl>
                                         <FormMessage />
                                     </FormItem>
                                 )}
                             />
                             <FormField 
                                 control={form.control}
                                 name='password'
                                 render={({field}) => (
                                     <FormItem>
                                         <FormLabel>Password</FormLabel>
                                         <FormControl>
                                             <Input placeholder='******' {...field} />
                                         </FormControl>
                                         <FormMessage />
                                     </FormItem>
                                 )}
                             />
     
                            {!isLoading ? <Button className='w-full' type='submit' >Submit</Button>
      : <Button disabled>
      <IoReload className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
 }
                             
     
                     </form>
     
                     </Form>
                 </div>
           </CardWrapper>
         ) }

     


    </div>
  )
}

export default page
