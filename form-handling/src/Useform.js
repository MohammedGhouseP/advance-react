import React from 'react'
import {useForm} from 'react-hook-form'

const Useform = () => {
   const{register,handleSubmit} = useForm()
   return (
    <>
    <form action='' onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type='text' placeholder='Name' ></input>
        <input {...register('email')} type='text' placeholder='E-Name' ></input>
        <input type='submit'/>
    </form>
    </>
   )
}

export default Useform
