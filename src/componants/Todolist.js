import React, { useState } from 'react'

const Todolist = () => {

    const [activity, setActivity] = useState('')
    const [list, setList] = useState([])
    const [editeIndex, setEditeIndex] = useState(null)
    const [dupilicate, setDupilicate] = useState(false)
    const [warning, setWarning] = useState('')

    const handleRemove = (index) => {
        const removeData = list.filter((els, id) => {
            return index !== id
        })
        setList(removeData)
    }

    const handleUpdate = (index) => {
        setActivity(list[index])
        setEditeIndex(index)
    }

    const handleAdd = (e) => {
        if (list.includes(activity)) {
            setDupilicate(true)
            return
        } else {
            setDupilicate(false)
        }
        if (activity === '') {
            setWarning(true)
            return
        } else {
            setWarning(false)
        }
        if (editeIndex != null) {
            const updateData = [...list]
            updateData[editeIndex] = activity
            setList(updateData)
            setActivity('')
            setEditeIndex(null)
        } else {
            setList([...list, activity])
            setActivity('')
        }
    }
    return (
        <div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h2>My Items List</h2>
                        {
                            list != [] && list.map((item, key) => {
                                return (
                                    <ul className='d-flex justify-content-between'>
                                        <li>{item}</li>
                                        <div>
                                            <button onClick={() => (handleUpdate(key))} className='btn btn-primary'>Edite</button>
                                        <button onClick={() => (handleRemove(key))} className='btn btn-danger ms-2'>dalete</button>
                                        </div>
                                    </ul>)
                                    
                            })}
                    </div>
                    <div className='col-md-4'>
                        <h2 className='text-center'>Add List Items</h2>
                        <input disabled={activity.length === 40} value={activity} onChange={(e) => { setActivity(e.target.value) }} className='form-control' type='text' placeholder='type..' />
                        {warning && <p>Please Enter A Item</p>}
                        {dupilicate && <p>This Item Is Already Exits</p>}
                        <button  onClick={handleAdd} className='btn btn-success form-control my-2'>{editeIndex !== null ? 'Update list' : 'Create list'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todolist
