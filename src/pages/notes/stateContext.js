import { useState } from 'react'
import NoteContext from './noteContext'

const StateContext = (props) => {

  const [notes, setNotes] = useState([])
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 5000)

  }

  const host = process.env.REACT_APP_API_PORT;

  const getAllNotes = () => {
    try {
      fetch(`${host}/api/notes/getnotes`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('token')
        }
      }).then((res) => { return res.json() }).then((data) => {
        setNotes(data)
      })
    } catch (error) {
      console.log(error.message);

    }
  }

  const addNotes = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addNotes`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const note = await response.json();
      setNotes(notes.concat(note.note))
      return note
    } catch (error) {
      console.log(error.message);

    }
  }

  const deleteNotes = async (id) => {

    try {
      const res = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      const data = await res.json()

      if (res.ok) {
        const newNotes = notes.filter((note) => {
          return note._id !== id
        })
        setNotes(newNotes)
      }
      console.log(data);

      return data
    } catch (error) {
      console.log(error.message);

    }

  }
  const updateNotes = async (id, title, description, tag) => {
    try {
      const res = await fetch(`${host}/api/notes/notesupdate/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ title, description, tag })
      })
      const data = await res.json()
      if (res.ok) {
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let i = 0; i < newNotes.length; i++) {
          const element = newNotes[i]
          if (element._id === id) {
            newNotes[i].title = title
            newNotes[i].description = description
            newNotes[i].tag = tag
            break;
          }
        }
        setNotes(newNotes);
      }
      return data
    } catch (error) {
      console.log(error.message);

    }
  }
  return (
    <div>
      <NoteContext.Provider value={{ showAlert, alert, notes, addNotes, getAllNotes, deleteNotes, updateNotes }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default StateContext