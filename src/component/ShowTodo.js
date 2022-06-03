import React from 'react'
import './Todo.css';
import { Link } from 'react-router-dom';
const ShowTodo = (props) => {

  return (
   <>
       <div className="container">
          <div className="row my-2">
              <div className="Items">
              <h6>{props.task}</h6>
            
              <Link class="btn btn-primary mr-2" to ="/edit">Edit</Link>
               </div>
               
              </div>
         
       </div>
   </>
  )
}

export default ShowTodo