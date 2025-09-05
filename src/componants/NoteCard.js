import React, { useContext } from 'react'
import NoteContext from '../pages/notes/noteContext'

const NoteCard = (props) => {

    const context = useContext(NoteContext)
    const { deleteNotes, showAlert } = context

    const handleDelete = async () => {
        const res = await deleteNotes(props.note._id)
        console.log(res);

        try {
            showAlert(res.message, "danger")
        } catch (error) {
            console.log(error.message);

        }
    }

    return (

        <div className='card my-3 shodow card-animate '>
            <div className='card-body'>
                <h5 className='card-title text-capitalize'>
                    <strong>Title : </strong>{props.note?.title}</h5>
                <p className='card-text text-capitalize'> <strong>Description : </strong>{props.note.description}</p>
                <p className='card-text text-capitalize'> <strong>Tag : </strong>{props.note.tag}</p>
                <p className='card-text text-capitalize'> <strong>Date : </strong>{props.note.date}</p>
                <div className='d-flex justify-content-end'>
                    <button onClick={() => { props.updateNote(props.note) }} className='btn btn-primary '>Update</button>
                    <button onClick={handleDelete} className='btn btn-danger ms-2'>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default NoteCard