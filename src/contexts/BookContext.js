import React,{createContext,useState} from 'react';
import uuid from 'uuid/v1'
export const BookContext = createContext();

const BookContextProvider = (props)=> {
    const [books,setBooks] = useState([
        {id:1,title:"name of the wind",author:"patrick rothfuss"},
        {id:2,title:"the final empire",author:"brandon sanderson"},
        ]);
    
    const addBook = (title,author)=>{
        setBooks([...books,{id:uuid(),title,author}])
    }
    const removeBook = (id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
