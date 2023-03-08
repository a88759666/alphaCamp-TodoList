import  Footer from "./Footer"
import  Header from "./Header"
import  TodoCollection from "./TodoCollection"
import  TodoInput from "./TodoInput"
import { Todo } from "type"
import { ReactElement, useState } from 'react';


const dummyTodos:Todo[] = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
    isEdit: false
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
    isEdit: false

  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
    isEdit: false

  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
    isEdit: false

  },
];


const TodoPage:React.FC = () => {
  const [ inputValue, setinputValue ] = useState('')
  const [ todos, setTodos ] = useState(dummyTodos)

  function onChangeInputHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget) {
        setinputValue(event.currentTarget.value)
    }
  }

  function handleAddTodo(){
    if ( inputValue.length === 0){
      return null
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id:prevTodos.length+1,
          title: inputValue,
          isDone:false,
          isEdit: false
        }
      ]
    })

    setinputValue('')
  }

  function handleKeyDown(event:React.KeyboardEvent<HTMLInputElement>){
    if ( event.key === 'Enter'){
      if ( inputValue.length === 0){
        return null
      }
  
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id:prevTodos.length+1,
            title: inputValue,
            isDone:false,
            isEdit: false
          }
        ]
      })
      setinputValue('')
    }
   
  }
  
  function handleToggleDone(id:number) {
    setTodos((prevTodos) => {
      return prevTodos.map( (todo) => {
        if ( todo.id === id){
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        return todo
      })
    })
  }

  function handleChangeMode(params: { id: number, isEdit: boolean }){
    setTodos((prevTodos) => {
      return prevTodos.map( (todo) => {
        if ( todo.id === params.id) {
          return {
            ...todo, 
            isEdit: true
          }
        }
        return {
          ...todo,
          isEdit: false
        }
      })
    })
  }

  function handleSave(params: { id: number, title: string }){
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === params.id){
          return {
            ...todo,
            title: params.title,
            isEdit: false
          }
        }

        return todo
      })
    })
  }

  function handleDeleteTodo(id:number){
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        if (todo.id === id){
          return null
        }
        return todo
      })
    })
  }


  return (
    <div>
      TodoPage
      <Header userName="" />
      <TodoInput 
        inputValue={inputValue} 
        onChange={onChangeInputHandler}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection 
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDeleteTodo}
      />
      <Footer todos={todos}/>
    </div>
  );
};

export default TodoPage;
