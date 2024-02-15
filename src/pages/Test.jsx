import { useState } from "react"


const Test = () => {
const [formData, setFormData] = useState({
    title: undefined,
    userId: undefined,
    body: undefined,
})
const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData(prevFormData => ({...prevFormData, [name]: value }))
    console.log(formData);
}
const handleSubmit = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


  return (
    <div className=" flex w-screen justify-center">
        <form className="*:border *:pl-1 *border-slate-900 gap-5 *:rounded-md flex flex-col w-80" action="" onSubmit={handleSubmit}>
            <input name="title" value={formData.title} type="text" placeholder="Title" onChange={handleChange} />
            <input name="userId" value={formData.userId} type="text" placeholder="User Id" onChange={handleChange} />
            <textarea name="body" value={formData.body} placeholder="body" rows={10} onChange={handleChange}/>
            <button type="submit" className="bg-blue-400 text-white py-2">Submit</button>
        </form>
    </div>
  )
}

export default Test