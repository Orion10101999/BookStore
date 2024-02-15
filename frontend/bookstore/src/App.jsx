import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Card from './pages/Card'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-book' element={<CreateBook />} />
          <Route path='/delete/:id' element={<DeleteBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route path='/show' element={<ShowBook />} />
          <Route path='/card/:id' element={<Card/>} />
          
        </Routes>
      </BrowserRouter>
    </>)
}

export default App;

