import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWirhCustomHook = () => {

    const {formState, username, email, password, onInputChange, onResetForm} = useForm(
    {
        username: '',
        email: '',
        password: ''
    })

    //const { username, email, password } = formState

    useEffect(() => {
      console.log('useEffect called!')
    }, [])

    useEffect(() => {
        console.log('useEffect formStateChanged!')
    }, [formState])

    useEffect(() => {
        console.log('useEffect email changed!')
    }, [email])     

  return (
    <>
        <h1>Formulario With Custom Hook</h1>
        <hr />
        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-2 mb-2'
            placeholder='carlos@google.com'
            name="email"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password" 
            className='form-control mt-2 mb-2'
            placeholder='Password'
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button 
            className='btn btn-danger'
            onClick={ onResetForm }
        >
            Borrar
        </button>
        
    </>
  )
}
