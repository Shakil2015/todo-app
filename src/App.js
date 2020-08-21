import React,{useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel} from '@material-ui/core'
import './css/App.css'
import Todos from './components/Todos'
import db from './config/config'
import firebase from 'firebase'

function App() {
  const[todo,setTodo] =useState([])
  const [input,setInput]=useState('')

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()))
      setTodo(snapshot.docs.map(doc=>({id: doc.id,todo: doc.data().todo})))
    })

  },[])
  
  const handleChange = (e)=>{
       e.preventDefault()
   
         db.collection('todos').add({
           todo:input,
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
         })
         setInput('')
  }
  return (
    <div className="App">
     <p className='app_title'>Shakil's Daily Worklist 🚀 </p>
      <form>
        <FormControl>
          <InputLabel >✅  Write your Todo</InputLabel>
          <Input value={input} onChange={e=>setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={handleChange} variant="contained" color="primary">
            add todo
        </Button>
      </form>
      {
                todo.map(item=>(
                  <Todos key={item.id} id={item.id} todo={item.todo} />
                ))
            }
       
     
     
    </div>
  );
}

export default App;
