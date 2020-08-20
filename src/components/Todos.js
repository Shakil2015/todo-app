import React from 'react'

const Todos = ({todo}) => {
    return (
        <div>
            <ul>
             {
                todo.map(item=>(
                    <li key={Math.random()}>{item}</li>
                ))
            }
                
            </ul>
        </div>
    )
}

export default Todos
