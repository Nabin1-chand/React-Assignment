
import{useState} from 'react';
import './Todo.css'
import ShowTodo from './ShowTodo';
import Image from './Image';
const TodoForm = () => {
    const[task , setTask] = useState({
        title:"",
        description:"",
    })
    // const {title, description}= task;
    const[data, setData] = useState([]);
    const onChangeHandler= (e)=>{
      setTask(e.target.value);

    };
 const listItem =(e)=>{
     e.preventDefault();
     const newData = task;
     setData ([...data, newData])
   setTask("");
 }
    
  return (
   <>
       <div className="container my-3">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Add your Daily task</h4>
                        </div>
                    </div>
                   
                        <div className="row justify-content-between text-white p-2 my-4">
                        <Image/>
                        <br/>
                            <div className="form-group flex-fill mb-2 ">
                                <input id="todo-input" type="text" placeholder ="title" name="title" value={task.title} className="form-control" onChange={e=>onChangeHandler(e)} />
                                <br/>
        
                                <div className="form-group">
                                        
                                        <textarea className="form-control"  placeholder="Description" name="description"  value={task.description} id="exampleFormControlTextarea1" rows="3"  onChange={e =>onChangeHandler(e)}></textarea>
                                    </div>
                                <br/>
                                  
                            </div>
                           
                        </div>
                         <button type="submit" className="btn btn-primary mb-2 ml-2 col-3" onClick={listItem}>Add todo</button>
                   
                      
                    </div>
           
                    {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                          
                        />
                        
                    })}
                  
                    </div>
                  
                    </div>

    
                   

   </>
  )
}

export default TodoForm