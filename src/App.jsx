import {useState, useEffect} from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  //declaring stateful variable 
  const [todos,setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

function persistData(newList){
  localStorage.setItem('todos',JSON.stringify({todos: newList}))
}

function handleAddTodos(newTodo){
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodos(index){
  const valuetoEdit=todos[index]
  setTodoValue(valuetoEdit)
  handleDelTodos(index)
}

function handleDelTodos(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex!==index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

useEffect(()=>{
  if(!localStorage){
    return
  }

  let localTodos=localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodos={handleEditTodos} handleDelTodos={handleDelTodos} todos={todos}/>
    </>
  )
}

export default App
