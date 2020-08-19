import React,{useState} from 'react';
import './css/App.css'

function App() {
  const[todo,setTodo] =useState(['Tack the pen first.','Take the book second'])
  const [input,setInput]=useState('')
  console.log(input)
  const handleChange = (e)=>{
       e.preventDefault()
   
         console.log('is clicked')
         setTodo([...todo,input])
         setInput('')
  }
  return (
    <div className="App">
     <p className='app_title'>Shakil's Daily Worklist</p>
      <form>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        <button type='submit' onClick={handleChange}>add todo</button>
      </form>
     
     <ul>{
       todo.map(item=>(
        <li key={Math.random()}>{item}</li>
       ))
       }
        
     </ul>
    </div>
  );
}

export default App;
