import React from 'react';
import './App.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TodoForm from './component/TodoForm';

import EditUser from './component/EditUser';
import { Suspense, } from 'react';
const TodoForm = React.lazy(()=>import('./component/TodoForm')) ;
function App() {
  return (
    <>
 
      <div className="App">
      <div>
      <Suspense fallback={<div>Please wait........</div>}>
      <TodoForm/>
      </Suspense>
       
      </div>
      <BrowserRouter>
      
      
      <Routes>
     
      <Route path="/edit" element={<EditUser/>} />
      </Routes>
      </BrowserRouter>
      
      </div>
   
    
    
    </>
    

    
  
  );
}

export default App;
