import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { AddBook } from './AddBook'
import BookTable from './components/BookTable'
import EditBook from './EditBook'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="navbar-brand" href="#">BookShelf</NavLink>
      </nav>
      <Routes>
        <Route path="/addbook" element={ <AddBook /> } />
        <Route path='/' element={ <BookTable /> }></Route>
        <Route path='/editBook/:id' element={ <EditBook /> }></Route>
      </Routes>
    </>
  )
}

export default App
