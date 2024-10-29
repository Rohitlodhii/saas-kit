import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


interface CardWrapperProps {
    title : string;
    titleDesc : string;
    children : React.ReactNode;
    showIcons : boolean ;
    isLogin : boolean ;
    
   

}

const CardWrapper : React.FC<CardWrapperProps> = ({title , titleDesc , children , showIcons , isLogin }) => {
  return (
   <Card>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{titleDesc}</CardDescription>
    </CardHeader>
    <CardContent>
        {children}
    </CardContent>
    <CardFooter className='flex flex-col gap-2'>

        {showIcons ? <div className='flex gap-4 justify-around items-center w-full'>
            <Button className='w-full' variant={"outline"}><FcGoogle/></Button>
            <Button className='w-full' variant={"outline"}><FaGithub/></Button>
          
            
        </div> : "" }
       

        {isLogin ? (
            <div>
                Dont have an account ? <span className='text-blue-600 mx-1'><Link href={'/auth/sign-up'}>Sign-Up</Link></span>
            </div>
        ):
        <div>
                Already have an account ? <span className='text-blue-600 mx-1'><Link href={'/auth/sign-in'}>Sign-In</Link></span>
            </div>
        }
    </CardFooter>
   </Card>
  )
}

export default CardWrapper
