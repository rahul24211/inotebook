import { useContext, useEffect, useState } from 'react'
import NoteContext from '../pages/notes/noteContext'


const AddNote = ({ editetable, setEditetable }) => {

    const context = useContext(NoteContext)
    const { addNotes, showAlert, updateNotes } = context
    const [note, setNotes] = useState({ title: '', description: '', tag: '' })

    useEffect(() => {
        if (editetable) {
            setNotes({
                title: editetable.title,
                description: editetable.description,
                tag: editetable.tag
            });
        }
    }, [editetable])

    const handleAddNote = async (e) => {
        e.preventDefault()

        if (editetable) {
            const res = await updateNotes(editetable._id, note.title, note.description, note.tag)
            showAlert(res.message,"success")
            setEditetable(null)
        } else {
            const res = await addNotes(note.title, note.description, note.tag);
            console.log(res);
            if (res) {
                showAlert(res.message, 'success')

            } else {
                showAlert(res.message, 'danger')
            }
        }
        setNotes({ title: '', description: '', tag: '' })


    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='my-3'>
            <h2 className='text-center'>Add Notes</h2>
            <form onSubmit={handleAddNote} className='my-4'>
                <input required minLength={3} value={note.title} onChange={onChange} name='title' className='form-control mt-2' type='text' placeholder='Title-name' />
                <input required minLength={5} value={note.description} onChange={onChange} name='description' className='form-control mt-2' type='text' placeholder='Description' />
                <input minLength={3} value={note.tag} onChange={onChange} name='tag' className='form-control mt-2' type='text' placeholder='Tag-name' />
                <button className='btn btn-primary form-control mt-4'>{editetable ? 'Update Note' : 'Add Note'}</button>
            </form>
        </div>
    )
}

export default AddNote