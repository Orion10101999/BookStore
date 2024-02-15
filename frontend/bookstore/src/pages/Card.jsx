import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Card = () => {
  const [book, setBook] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((response) => {
        setBook(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="bg-green-400 shadow-md rounded-lg p-4 max-w-sm w-full mx-auto">
      
        <div className="bg-gray-100 shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2"><span>Title: </span>{book.title}</h2>
          <p className="text-gray-700 mb-2"><span>Author: </span>{book.author}</p>
          <p className="text-gray-600"><span>Publish Year: </span>{book.publishYear}</p>
          <p className="text-gray-600"><span>Created By: </span>{`${new Date(book.createdAt).toLocaleDateString()}`}</p>
          <p className="text-gray-600"><span>Updated By: </span>{`${new Date(book.createdAt).toLocaleDateString()} and ${new Date(book.updatedAt).toLocaleTimeString()}`}</p>
          <p className="text-gray-600"><span>ID: </span>{book._id}</p>
        
      </div>
    </div>
  )
}

export default Card