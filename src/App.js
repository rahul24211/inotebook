
import Login from './componants/Login'
import Reg from './componants/Reg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componants/Navbar'

import Calculate from './componants/Calculate'
import Todolist from './componants/Todolist'
import Counter from './componants/Counter'
import DebouncingSearch from './componants/DebouncingSearch'
import NoteCard from './componants/NoteCard'

import Home from './componants/Home'
import StateContext from './pages/notes/stateContext'
import About from './componants/About'
import ToggleStateContext from './pages/notes/toggleStateContext'
import Alert from './componants/Alert'
import First from './componants/First'


const App = () => {

  return (
    <ToggleStateContext>
      <StateContext>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route path='/register' element={<Reg />} />
            <Route path='/login' element={<Login />} />
            <Route path='/calculater' element={<Calculate />} />
            <Route path='/todolist' element={<Todolist />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/debouncingSesrch' element={<DebouncingSearch />} />
            <Route path='/notecard' element={<NoteCard />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          

          </Routes>
        </Router>
      </StateContext>
    </ToggleStateContext>
  )
}

export default App
