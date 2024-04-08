// import React, { useState } from 'react'
// import 'remixicon/fonts/remixicon.css'

// const App = () => {

//   const [tasks , settask] = useState([])
//   const [ tittle , settittle] = useState('');

//   const submitHandler = (e)=>{
//     e.preventDefault();
//     const newtask = {tittle , completed :false}
//     console.log(newtask);


//     const copytasks = [...tasks];
//     copytasks.push(newtask);
//     settask(copytasks);

//     settittle("")
    
//   };
//   console.log(tittle);
//   return (
//     <>
//        <div className="main px-16 w-96 h-96 bg-blue-600 flex items-center justify-center flex-col gap-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl ">
//         <h1 className='text-4xl font-bold italic' >Todo List</h1>
//         <form className='flex gap-5 ' onSubmit={submitHandler} >
//         <input className='p-2 rounded-lg' type="text" placeholder='Enter Your Task ' />
//         <button className='w-10 h-10 bg-red-500 rounded-lg'>+</button>
//         </form>
//           {tasks.map((elem ,index)=> (
//              <div key={index} className="viewTask flex justify-between w-full bg-slate-700 h-8 ">
//              <h1 className='text-red-600'>{elem.tittle}</h1>
//              <div className="crundOprations flex gap-5 ">
//              <i className="ri-file-edit-line"></i>
//              <i className="ri-delete-bin-line"></i>
//              </div>
//             </div>
//           ))}
        
//        </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [tittle, setTittle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { tittle, completed: false };
    console.log(newTask);

    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);

    setTittle('');
  };

  const handleInputChange = (e) => {
    setTittle(e.target.value);
  };

  return (
    <>
      <div className="main px-16 w-96 h-96 bg-blue-600 flex items-center justify-center flex-col gap-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl">
        <h1 className="text-4xl font-bold italic">Todo List</h1>
        <form className="flex gap-5" onSubmit={submitHandler}>
          <input
            className="p-2 rounded-lg"
            type="text"
            placeholder="Enter Your Task"
            value={tittle}
            onChange={handleInputChange}
          />
          <button className="w-10 h-10 bg-red-500 rounded-lg">+</button>
        </form>
        {tasks.map((elem, index) => (
          <div key={index} className="viewTask flex justify-between w-full bg-slate-700 h-8">
            <h1 className="text-red-600">{elem.tittle}</h1>
            <div className="crundOprations flex gap-5">
              <i className="ri-file-edit-line"></i>
              <i className="ri-delete-bin-line"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
