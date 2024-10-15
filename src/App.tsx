import './App.css'
import Main from "./components/Main.tsx";
import {v1} from "uuid";
import {useState} from "react";
import AddTodo from "./components/AddTodo.tsx";
import DeleteTodo from "./components/DeleteTodo.tsx";

export type TypeArr = {
    id: string,
    todo: string,
    check: boolean
}

function App() {
    const [arr, setArr] = useState <TypeArr>({
        id: v1(),
        todo: "My first todo",
        check: false
    })

  return (
    <>
        <AddTodo/>
        <Main arr={arr} setArr={setArr}/>
        <DeleteTodo/>
    </>
  )
}

export default App
