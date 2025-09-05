import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ToggleContext from '../pages/notes/toggleContext'
const Navbar = () => {

    const toggleMode = useContext(ToggleContext)

    const { theme, setTheme } = toggleMode

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }


    const handleToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const location = useLocation()
    useEffect(() => {
    }, [location])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" id='nav'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/calculater' ? 'active' : ''}`} to="/calculater">Calculater</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/todolist' ? 'active' : ''}`} to="/todolist">Todo-List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/counter' ? 'active' : ''}`} to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/debouncingSesrch' ? 'active' : ''}`} to="/debouncingSesrch">debouncing-Sesrch</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem("token") ? (
                            <div>
                                <Link to='/login'><button className='btn btn-primary'>Sign-IN</button></Link>
                                <Link to='/register'><button className='btn btn-success ms-2'>Sign-Up</button></Link>
                                <button onClick={handleToggle} className={`btn btn-${theme === 'dark' ? 'info' : 'secondary'} ms-2`} >{theme === 'light' ? 'Dark' : 'Light'}</button>
                            </div>
                        ) : <div>
                            <button onClick={handleLogout} className='btn btn-secondary'>Log-Out</button>
                            <button onClick={handleToggle} className={`btn btn-${theme === 'dark' ? 'info' : 'dark'} ms-2`} >{theme === 'light' ? 'Dark' : 'Light'}</button>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
