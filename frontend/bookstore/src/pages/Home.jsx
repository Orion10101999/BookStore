import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './crausal.css'
import axios from 'axios'
const Home = () =>{
  const [books , setBooks] = useState([])
  useEffect(() => {
    
    axios.get(`http://localhost:5000/api/books`)
    .then((response) => {
      setBooks(response.data.data)
      }).catch((error) => {
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  return (
    <div className='overflow-hidden mb-5'>
      <Link to="/show"><h1 className='text-center text-slate-800 p-6 bg-slate-300 font-bold'>
        Show All Books
      </h1></Link>
      <div className="flex flex-wrap">
        {books.map((book,i) => (
          <div key={i} className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <div className="h-full border-gray-200 border p-6 rounded-lg bg-blue-300 tex-black-600 mx-4 my-5">
              <h2 className="text-xl mb-3 font-medium title-font text-black-900">{book.title}</h2>
              <p className="leading-relaxed mb-3 text-black-500">{book.author}</p>
              <p className="leading-relaxed mb-3 text-black-500">{book.publishYear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home