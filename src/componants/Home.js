import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { Transition } from '@mantine/core'

const Home = () => {
    const [opened, setOpened] = useState(false)
    useEffect(() => {
        setOpened(true)
    }, [])

    return (
        localStorage.getItem('token') ? (
            <Transition
                mounted={opened}
                transition="pop"
                duration={400}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}><div className='container'>
                    <div className='row'>
                        <Notes />
                    </div>
                </div></div>}
            </Transition>
        ) : (
            <Transition
                mounted={opened}
                transition="scale"
                duration={400}
                timingFunction="ease"
            >
                {(styles) => <div style={styles}><div className='container d-flex justify-content-between align-items-center my-5'>
                    <div className='row '>
                        <div className='col-md my-5'>
                            <h2 id='startPageHeading' className='text-capitalize my-3'>inotebook - secure your idias</h2>
                            <p id='startPagePara' className='startPagePara text-capitalize'>"iNotebook is a secure, cloud-based note-taking app that lets you create, edit, and manage your personal notes anytime, anywhere."</p>
                            <p className='startPagePara'>iNotebook — your personal online notebook. Take notes, organize thoughts, and access everything securely from anywhere. No clutter, no paper, just a clean and intuitive way to manage your ideas."</p>
                        </div>

                    </div>
                </div></div>}
            </Transition>
        )
    )
}

export default Home
