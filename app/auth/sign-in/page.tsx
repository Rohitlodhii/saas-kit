"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import CardWrapper from '../components/CardWrapper'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { signInSchema,  } from '@/lib/zodSchema'
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const page = () => {

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver : zodResolver(signInSchema),
        defaultValues : {
            email : "",
            password : "",
        }
    })

    const onSubmit = (values : z.infer<typeof signInSchema>) => {
        console.log(values);
    }


  return (
    <div className='h-[100vh] flex flex-col items-center justify-center w-full'>
      <CardWrapper
        title='SignIn'
        titleDesc='Login to your Account'
        showIcons={true}
        isLogin={true}
        
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

                        <Button className='w-full' type='submit' >Login</Button>


                </form>

                </Form>
            </div>
      </CardWrapper>
    </div>
  )
}

export default page
