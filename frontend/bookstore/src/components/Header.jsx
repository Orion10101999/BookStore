import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';

const Header = () => {

    const [search, setSearch] = useState('')
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <Link to="/">
                <h1 className="flex items-center space-x-2">
                    <span className="text-blue-900 font-bold">Book</span>
                    <span className="text-yellow-900 font-bold">Store</span>
                </h1>
            </Link>
            <Link to="/show">
                <div className="relative">
                    <form onSubmit={(e)=>e.preventDefault()}>
                    <input placeholder='Search Books ...' onChange={searchHandler} className='p-2 text-black w-full focus:outline-none rounded' value={search} />
                    <button type='submit' className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-400 rounded p-2">
                        <AiOutlineSearch size={20} />
                    </button>
                    </form>
                </div>
            </Link>
            <Link to="/add-book">
                <h1 className="flex items-center space-x-2">
                    <span className="text-blue-200 font-bold">Add Books</span>
                    <AiOutlinePlus size={20} />
                </h1>
            </Link>
            <Link to="/show">
                <h1 className="flex items-center space-x-2">
                    <span className="text-blue-100 font-bold">Show All Books</span>
                </h1>
            </Link>
        </div>
    );
};

export default Header;