import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log(`Counter Updated ${count}`)
    }, [count])

    const handleInc = () => {
        setCount(count + 1)
        console.log(count, 'inc was clicked');

    }
    const handleDec = () => {
        setCount(count > 0 ? count - 1 : count)
        console.log(count, 'dec was clicked');
    }
    const handleReset = () => {
        setCount(0)
        console.log(count, 'res was clicked');
    }
    return (
        <div className='container d-flex justify-content-center  '>
            <div className='row  '>
                <div className='col-md-12 bg-info h-100 my-5 pt-5 '>
                    <h2 className='text-center mt-4'>counter app</h2>
                    <p className='text-center'>{count}</p>
                    <button onClick={handleInc} className='btn btn-primary ms-2'>increment</button>
                    <button onClick={handleDec} className='btn btn-primary ms-2'>decrement</button>
                    <button onClick={handleReset} className='btn btn-danger  ms-2'>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
