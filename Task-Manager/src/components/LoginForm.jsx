import React from 'react';
import { useForm } from 'react-hook-form';
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className=''>
    <p className='m-4'>welcome to task manager</p>
    <form className='flex flex-col w-3/5 m-8' onSubmit={handleSubmit(onSubmit)}>
      <input className='w-2/5 m-4' type="text" placeholder="name" {...register("name", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className='w-2/5 m-4' {...register("password", { required: true })} type="password" />

      <input className='w-2/5 m-4' type="submit" />
    </form>
    </div>
  );
}

export { LoginForm }