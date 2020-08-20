import React,{useState} from 'react';
import { Button,FormControl,Input,InputLabel} from '@material-ui/core'
import './css/App.css'
import Todos from './components/Todos'

function App() {
  const[todo,setTodo] =useState(['Tack the pen first.','Take the book second'])
  const [input,setInput]=useState('')
  console.log(input)
  const handleChange = (e)=>{
       e.preventDefault()
   
         console.log('is clicked')
         setTodo([...todo,input])
         setInput('')
         console.log('is Todos',todo)
  }
  return (
    <div className="App">
     <p className='app_title'>Shakil's Daily Worklist</p>
      <form>
        <FormControl>
          <InputLabel >✅Write your Todo</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={handleChange} variant="contained" color="primary">
            add todo
        </Button>
      </form>
       <Todos todo={todo} />
     
     
    </div>
  );
}

export default App;
