import React, { useState } from "react";
const Form = ({onSubmit})=>{
    const [inputVal, setInputVal ] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit(inputVal)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}}/>
            <button type="submit">submit</button>
        </form>
    )
}
export default Form;