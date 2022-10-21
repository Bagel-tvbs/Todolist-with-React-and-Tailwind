import React from'react'
import './App.css';
import List from './List'
function App() {
  const [ todoList, setTodoList ] = React.useState([]);
  const addTodo=()=>{
    const input = document.querySelector('#todoInput');
    if (input.value===""){
      window.alert("需輸入文字")
    }else{

      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          name: input.value,
          status: false,
        }
      ])
      input.value = '';
    }
  }
  const remoteAllTodo=()=>{
    setTodoList([])
  }
  const updateTodo = (event) => {
    const { id } = event.target.dataset;
    const newTodoList = todoList.map((todo) => {
      if(todo.id === Number(id)) {
        todo.status = !todo.status;
      }
      return todo;
    });
  
    setTodoList([...newTodoList] );
  }
  return (
    <div>
 
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">Bagel 練習React 待辦清單</h1>
          <div className="flex">
            <input id="todoInput" type="text" className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0" placeholder="請輸入你的代辦事項" />
            <button  onClick={addTodo}className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button>
          </div>
          <ul>
            {todoList.map((todo,key) => <List key={key} todo={todo} updateTodo={updateTodo}></List>)}

            
          </ul>
          {/* <ul>
  {
    todoList.map((todo) => (
      <li className="py-4" key={ todo.id } data-id={ todo.id } >
        <label className={ todo.status ? 'line-through' : ''} >
          <input onChange={ updateTodo } type="checkbox" className="mr-2" data-id={ todo.id } checked={ todo.status }/>
          { todo.name }
        </label>
      </li>
    ))
  }
</ul>  */}
 
          <div className="flex justify-between items-center">
            <p>
            目前有 <span className="font-medium">{ todoList.length }</span> 個事項待完成
            </p>

            <button onClick={ remoteAllTodo } type="button" className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700">我都做完啦！</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
