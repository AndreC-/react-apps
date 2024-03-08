import { createContext, useContext } from "react";


export interface todoItem {
    id: number,
    todo: string,
    completed: boolean
}

export type TodoContextType = {
    todos: todoItem[],
    addTodo: (msg:string) => void,
    updateTodo: (id: number, msg:string) => void,
    deleteTodo: (id: number) => void,
    toggleComplete: (id: number) => void
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const useTodo = () => {
    return useContext(TodoContext) as TodoContextType
}

export const TodoProvider = TodoContext.Provider