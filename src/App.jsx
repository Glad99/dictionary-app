
import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [countries, setCountries] = useState([])
const [error, setError] = useState(null)
const [input, setInput] = useState("")

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/${input ? `/name/${input}`: "all"}`)
    .then(res => res.json())
    .then(res =>{
      console.log(res);
      let country = res;
      setCountries(country)
    }).catch(err=>setError(err))
  }, [input])
  return (
    <div className="">
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search by name" className="placeholder: pl-5  w-80 bg-slate-200 h-10 rounded-xl border-black" />
      
      <div className="grid grid-cols-5 items-center gap-8 m-5">
      {countries.map(item=>(
        <div className="flex flex-col items-start justify-start" key={item.cca3}>
          <img src={item.flags.png} alt={`a flag of ${item.name.common}`} />
          <p>Country: {item.name.official}</p>
          <p>Capital: {item?.capital}</p>
          <p>Population: {item.population}</p>
          <p>{item.independent ? "independent" : "dependent"}</p>
        </div>
      )
    )}
      </div>
    </div>
  )
}

export default App
