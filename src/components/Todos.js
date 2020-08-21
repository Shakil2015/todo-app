import React,{useState} from 'react'
import '../css/Todos.css'
import{
List,
ListItem,
ListItemText,
ListItemAvatar,
Avatar
,Modal,
makeStyles,Button} from '@material-ui/core'
import db from '../config/config'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Todos = ({id,todo}) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle)
    const [open,setOpen] = useState(false)
    const [input,setInput]= useState(todo)
    const handleOpen =()=>{
        setOpen(true)

    }
    const handleClose= ()=>{
        setOpen(false)
    }
    const handleUpdate =()=>{
        db.collection('todos').doc(id).set({
           todo:input
        },{merge:true})
        setOpen(false)
    }
    return (
    <>
    <Modal
        open={open}
        onClose={e=>setOpen(false)}
        
    >
        <div style={modalStyle} className={classes.paper}>
            <h1>I am Modal</h1>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <Button onClick ={handleUpdate} color='primary'>Update</Button>

        </div>
    </Modal>
    <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={todo} secondary='todo'/>
            </ListItem>
            <EditIcon onClick={handleOpen}/>
            <DeleteForeverIcon color='primary' onClick={e=>db.collection('todos').doc(id).delete()} />
        </List>
    
    </>
        
        
    )
}

export default Todos
