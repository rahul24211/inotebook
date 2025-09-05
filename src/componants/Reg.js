import { Button, Transition } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../pages/notes/noteContext'



const Reg = () => {

    const context = useContext(NoteContext)
    const { showAlert } = context

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [opened,setOpened] = useState(false)

    const navigate = useNavigate()
    useEffect(()=>{
        setOpened(true)
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { name, email, password }

        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((res) => { return res.json() }).then((data) => {
            console.log(data);
            showAlert(data.message, 'danger')
            if (data.authToken) {
                showAlert(data.message, 'success')
                navigate('/login')
            } else {
                navigate("/register")
            }
        })
        setName('')
        setEmail('')
        setPassword('')
    }

    return (

 <Transition
      mounted={opened}
      transition="fade-right"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => <div style={styles}><div className='container '>
            <div className='row justify-content-between  my-5'>
                <div className='col-md-6'>
                    <div className='my-5'>
                        <h1 id='heading1'>welcome</h1>
                        <span id='heading2'>to <h5 id='heading3'>my website</h5></span>
                        <h1><strong id='heading4'>Inotebook</strong></h1>
                    </div>
                </div>
                <div className='col-md-6' id='reg'>
                    <form className='' onSubmit={handleSubmit}>
                        <h1 className='text-center mb-4'>Registration Form</h1>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} className='input form-control ' type='text' placeholder='Name' minLength={3} required />
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='input form-control' type='email' placeholder='Email' required />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='input form-control' type='password' placeholder='Password' minLength={6} required />
                        <Button type='submit' fullWidth
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'green', deg: 90 }}
                            className='regButton mt-2'
                            mt={4}

                        >
                            Sign-Up
                        </Button>

                        <Link className='text-decoration-none' to="/login"><Button type='submit' fullWidth
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'blue', deg: 90 }}
                            className='regButton'
                            mt={4}
                        >
                            Sign-In
                        </Button> </Link>
                    </form>



                </div>
            </div>


        </div></div>}
    </Transition>







        
    )

}

export default Reg
