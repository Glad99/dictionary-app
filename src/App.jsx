<<<<<<< HEAD

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
=======
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Country from './pages/Country';
import Test from './pages/Test';
>>>>>>> 79c4e3251bc1b44a7a2e62da26bd6b33307828ef

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.hits);
        setData(res.hits);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/country" element={<Country />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
<<<<<<< HEAD
=======
return(
<<<<<<< HEAD
  <>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
  </>
  ) 
=======
  <div className=" w-full overflow-x-hidden">
    <NavBar/>
    <Routes>
      <Route path="/country" element={<Country/>}/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  </div>
)
>>>>>>> ece3e3214bd3f2f7ae36a369c1fef7328672f77c
>>>>>>> eab6ef88229abf45c88f5287ed79ec8e190d6ab2
=======
>>>>>>> 79c4e3251bc1b44a7a2e62da26bd6b33307828ef
}

export default App;