import React, { useState } from 'react'

const Calculate = () => {
    const [input, setInput] = useState('')

    const handleClick = (e) => {

        setInput(input + e.target.value)
    }

    const handleDeleteOne = (e) => {
        setInput(input.slice(0, -1))
    }
    const handleClear = () => {
        setInput('')
    }
    const handleResult = () => {
        let result = 'ERROR'
        const allowCharacter = '9876543210.+-*/%';
        for (let char of input) {
            if (!allowCharacter.includes(char)) {
                setInput('ERROR')
                return;
            }
        }
        try {
            if (input.includes('+')) {
                const parts = input.split('+')
                result = (parseFloat(parts) + parseFloat(parts[1])).toString()
            } else if (input.includes('-')) {
                const parts = input.split('-')
                result = (parseFloat(parts) - parseFloat(parts[1])).toString()
            } else if (input.includes('*')) {
                const parts = input.split('*')
                console.log(parts);

                result = (parseFloat(parts) * parseFloat(parts[1])).toString()

                console.log(parseFloat(parts));
                console.log(parseFloat(parts[1]));


            }
            else if (input.includes('/')) {
                const parts = input.split('/')
                result = (parseFloat(parts) / parseFloat(parts[1])).toString()
            }
            else if (input.includes('.')) {
                const parts = input.split('.')
                result = (parseFloat(parts).parseFloat(parts[1])).toString()
            }
            else if (input.includes('%')) {
                const parts = input.split('%')
                result = (parseFloat(parts) % parseFloat(parts[1])).toString()
            }
            setInput(result)

        } catch (error) {
            result = 'ERROR'
        }

    }
    return (
        <div className='container my-5' id='calculater'>
            <div className='row justify-content-center' >
                <input readOnly type='text' value={input} className=' my-3 ' id='input' />

                <div className='buttons col-md-2  '>
                    <button onClick={handleClear} className='btn btn-danger text-dark'>C</button>
                    <button value={'/'} onClick={handleClick} className='btn btn-success text-dark'>/</button>
                    <button value={'*'} onClick={handleClick} className='btn btn-success text-dark'>*</button>
                    <button onClick={handleDeleteOne} className='btn btn-success text-dark'>←</button>
                    <button value={'7'} onClick={handleClick} className='btn btn-primary text-dark'>7</button>
                    <button value={'8'} onClick={handleClick} className='btn btn-primary text-dark'>8</button>
                    <button value={'9'} onClick={handleClick} className='btn btn-primary text-dark'>9</button>
                    <button value={'-'} onClick={handleClick} className='btn btn-success text-dark'>-</button>
                    <button value={'4'} onClick={handleClick} className='btn btn-primary text-dark'>4</button>
                    <button value={'5'} onClick={handleClick} className='btn btn-primary text-dark'>5</button>
                    <button value={'6'} onClick={handleClick} className='btn btn-primary text-dark'>6</button>
                    <button value={'+'} onClick={handleClick} className='btn btn-success text-dark'>+</button>
                    <button value={'1'} onClick={handleClick} className='btn btn-primary text-dark'>1</button>
                    <button value={'2'} onClick={handleClick} className='btn btn-primary text-dark'>2</button>
                    <button value={'3'} onClick={handleClick} className='btn btn-primary text-dark'>3</button>
                    <button onClick={handleResult} className='btn btn-success text-dark '>=</button>
                    <button value={'%'} onClick={handleClick} className='btn btn-primary text-dark'>%</button>
                    <button value={'0'} onClick={handleClick} className='btn btn-primary text-dark'>0</button>
                    <button value={'.'} onClick={handleClick} className='btn btn-primary text-dark'>.</button>
                    <button className='btn btn-danger text-dark'>🤖</button>

                </div>


            </div>
        </div>
    )
}

export default Calculate
