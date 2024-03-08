import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import { todoItem } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState<todoItem[]>([])

  const addTodo =  (msg: string)=> {
    setTodos((prev) => [{id:Date.now(), todo: msg, completed:false}, ...prev])
  }

  const updateTodo = (id:number, msg: string) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (
        prevTodo.id === id ? {...prevTodo, todo:msg} : prevTodo
      )
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => (prev.filter((todo) => todo.id !== id)))
  }

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
    prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if (localTodos) {
      const todos = JSON.parse(localTodos)
      if (todos && todos.length > 0){
        setTodos(todos)
      }
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage your to-do list
          </h1>
          <div className='mb-4'>
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
          {
            todos.map((todo) => (<div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>))
          }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
