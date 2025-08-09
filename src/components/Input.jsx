import { useState } from "react";
import { useDispatch } from "react-redux";
import { createList } from "./slice";

const Input = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <input placeholder="enter input data" onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => dispatch(createList(input))}>Click me</button>
        </div>
    )
}

export default Input;