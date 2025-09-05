import React, { useEffect, useState } from 'react'
import ToggleContext from './toggleContext'

const ToggleStateContext = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme' || 'light'))

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ToggleContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleStateContext
