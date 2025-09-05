import { Button, Transition } from '@mantine/core'
import React, { use, useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import NoteCard from './NoteCard'
import NoteContext from '../pages/notes/noteContext'

const Login = () => {

    const context = useContext(NoteContext)

    const { showAlert } = context

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [opened, setOpened] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        setOpened(true)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { email, password }
        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => { return res.json() }).then((data) => {
            console.log(data)
            showAlert(data.message, 'danger')
            if (data.success) {
                localStorage.setItem('token', data.authToken)
                showAlert(data.message, 'success')
                navigate('/')
            } else {
                navigate('/login')
            }
        })
        setName('')
        setEmail('')
        setPassword('')
    }
    return (

        <Transition
            mounted={opened}
            transition="fade-left"
            duration={400}
            timingFunction="ease"
        >
 
            {(styles) => <div style={styles}> <div className='container my-5'>
                <div className='row justify-content-between'>
                    <div className='col-md-6' id='login'>
                        <form className='' onSubmit={handleSubmit}>
                            <h1 className='text-center'>Login Form</h1>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='input form-control my-3 p-2' type='email' placeholder='Email' />
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='input form-control my-3 p-2' type='password' placeholder='password' />
                            <Button type='submit' fullWidth
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 90 }}
                                className='logButton'
                            >
                                Sign-IN
                            </Button>
                            <Link className='text-decoration-none' to="/register"><Button type='submit' fullWidth
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'green', deg: 90 }}
                                mt={4}
                                className='logButton'
                            >
                                Sign-Up
                            </Button> </Link>
                        </form>
                    </div>
                    <div className='col-md-6 my-5' >
                        <div className='my-5'>
                            <h1 id='logHeading1'>welcome back!</h1>
                            <p id='logHeading2'>you can sign in to access with your exisiting account.</p>
                        </div>
                    </div>
                </div>


            </div></div>}
        </Transition>







    )
}

export default Login
