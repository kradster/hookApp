import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = ()=>{
const {books} = useContext(BookContext);
return (
    <div className="navbar">
        <h1>Vinod Reading list</h1>
        <p>Currently you have {books.length} books to get throug... </p>
    </div>
)
}

export default Navbar
