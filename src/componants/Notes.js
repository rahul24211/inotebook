import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../pages/notes/noteContext'
import NoteCard from './NoteCard'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getAllNotes, } = context

    const [editetable, setEditetable] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getAllNotes();
        } else {
            navigate("/");
        }
    }, []);
    const handleUpdateNote = (note) => {
        setEditetable(note)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <>
            <AddNote editetable={editetable} setEditetable={setEditetable} />

            <div className='my-2'>
                <h2 className='text-center'>Your Notes</h2>
                {Array.isArray(notes) && notes.length > 0 ? (
                    notes
                        .filter(note => note && note._id) // make sure note is valid and has _id
                        .map(note => (
                            <NoteCard key={note._id} updateNote={handleUpdateNote} note={note} />
                        ))
                ) : (
                    <p className='text-center'>No Notes Display</p>
                )}
            </div>
        </>
    )
}

export default Notes
