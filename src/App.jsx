
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Country from './pages/Country'
import Test from './pages/Test'

function App() {
<<<<<<< HEAD
const [data, setData] = useState([])
const [error, setError] = useState(null)

  useEffect(()=>{
    fetch("https://hn.algolia.com/api/v1/search?query=redux")
    .then(res => res.json())
    .then(res => {
      console.log(res.hits);
      setData(res.hits)
    }).catch(err => setError(err))
  }, [])
  //useEffect takes in a callback function and dependecies (()=> {},[])..fetch(url).then()converts to json,,res is the respond to request sent..map is always in qurly braces..function created inside useEffect can only be use in the useEffect
  return(
    <div className="grid grid-cols-4 gap-5">
      {data.map(item=>(
        <div className="bg-slate-300 p-5 items-center flex flex-col" key={item.story_id}>
          <p className="underline">{item.title}</p>
          <p>{item.author}</p>
          <a target="-blank" className="bg-blue-400 w-fit px-3 py-1 rounded-md text-white" href={item.url}>click go to book</a>
          {
            item._tags.map((tag, index) => (
              <div key={index}>
                <p>{tag}</p>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
=======
return(
  <div className=" w-full overflow-x-hidden">
    <NavBar/>
    <Routes>
      <Route path="/country" element={<Country/>}/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  </div>
)
>>>>>>> ece3e3214bd3f2f7ae36a369c1fef7328672f77c
}

export default App
