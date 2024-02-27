import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var count = 1

function App() 
{
  var [todo, setTodo] = useState([
  {
    id: count++,
    title: "Todo 1",
    completed: false
  },
  {
    id: count++,
    title: "Todo 2",
    completed: true
  },
  {
    id: count++,
    title: "Todo 3",
    completed: false
  },
])

  const addTodo = () =>
  {
    console.log("Add todo")

    const todoText = document.getElementById("todoInput").value
    let todoObject =
    {
      id: count++,       //integer
      title:todoText,   //datatype string
      completed: false       // boollean
    }
    console.log (" todoText: "+todoText)
    todo.push (todoObject)
    setTodo([...todo])     //spreader operator[...todo]
  }


  console.log("Length of Todo",todo.length)
  const deleteTodo =(id) =>
  {
    console.log("Delete todo id", id)
    todo = todo.filter(todoTemp =>
      {
        if (id === todoTemp.id)
        {
          return false
        }
        else
        {
          return true
        }
      })
      setTodo([...todo])
  }

  const checkedChange = (id) =>
  {
    console.log("checkedChange id: ", id)
    todo = todo.map(todoTemp =>
      {
        if (id=== todoTemp.id)
        {
          //updated completed property
          todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
      })
      setTodo([...todo])
  }


  return (
    <div>
    
      <h1>Todo App</h1>
      <input id= "todoInput" type = "text" placeholder='Add your todo here...'/>
      <button onClick={addTodo}>Add</button><br/>
      {
        todo.map(todoTemp =>                    //map work:-itrate or updated array return 
          {
            return <div key={todoTemp.id}>
              {  todoTemp.completed === true ?                                       //condition    terniary operator
                <><input type ='checkbox' onChange={() => checkedChange(todoTemp.id)} checked/><s>{todoTemp.title}</s></>:       //if execution
                <><input type='checkbox' onChange={() => checkedChange(todoTemp.id)}/>{todoTemp.title}</>                         //else execution
              }
              <button onClick={()=>deleteTodo(todoTemp.id)}>Delete</button>
              </div>
          })
      }
    </div>
  );
}

export default App;
