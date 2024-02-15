import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const DeleteBook = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then((response) => {
        console.log(response);
        alert("Deleted SucessFully")
        navigate('/show')
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="bg-green-400 shadow-md rounded-lg p-4 max-w-sm w-full mx-auto">
      
        
    </div>
  )
}

export default DeleteBook;