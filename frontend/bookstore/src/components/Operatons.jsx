import React from 'react'
import { AiFillEdit, AiFillDelete, AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Operations = ({ book }) => {

  return (
    <div className="flex items-center space-x-4">
      <Link to={`/card/${book._id}`}>
        <button className="text-green-500 hover:text-green-700 focus:outline-none">
          <AiOutlineInfoCircle size={20} />
        </button>
      </Link>
      <Link to={`/edit/${book._id}`}>
        <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
          <AiFillEdit size={20} />
        </button>
      </Link>
      <Link to={`/delete/${book._id}`}>
        <button className="text-red-500 hover:text-red-700 focus:outline-none">
          <AiFillDelete size={20} />
        </button>
      </Link>
    </div>
  );

};

export default Operations;