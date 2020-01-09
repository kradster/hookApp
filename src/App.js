import React from 'react';
import NavBar from './components/NavBarOld';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import SongList from './hooks/SongList';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider> */}
        {/* <AuthContextProvider> */}
          {/* <NavBar/> */}
          {/* <BookList/> */}
          {/* <ThemeToggle/> */}
          {/* <SongList/> */}
        {/* </AuthContextProvider> */}
      {/* </ThemeContextProvider> */}
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
