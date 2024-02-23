import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Country from './pages/Country';
import Test from './pages/Test';

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
}

export default App;