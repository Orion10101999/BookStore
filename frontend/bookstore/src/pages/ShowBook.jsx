import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Operations from '../components/Operatons';

const ShowBook = () => {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/books'); // Replace with your backend API endpoint
      setBooks(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">ID</th>
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Author</th>
            <th className="px-4 py-2 border border-gray-300">Publish Year</th>
            <th className="px-4 py-2 border border-gray-300">Operations</th>
            
          </tr>
        </thead>
        <tbody>
          
          {
          books.map((book,i) => (
            <tr key={book._id}>
              <td className="border border-gray-300 px-4 py-2">{i+1}</td>
              <td className="border border-gray-300 px-4 py-2">{book.title}</td>
              <td className="border border-gray-300 px-4 py-2">{book.author}</td>
              <td className="border border-gray-300 px-4 py-2">{book.publishYear}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Operations book={book}/>
                </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;