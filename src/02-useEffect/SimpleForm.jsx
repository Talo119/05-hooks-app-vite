import React, { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'talo',
        email: 'talo@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,            
        })        
        //console.log(name, value)
    }

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
        <h1>Formulario Simple</h1>
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

        {
            username === 'talo2' && <Message />
        }
        

    </>
  )
}
