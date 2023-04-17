import React, { useState, memo } from "react"

const Child = memo(() => {
    return(
        <div>
            {console.log("Memo Component")}
            <h4>Child Component</h4>
        </div>
    )
})
// Feature Memo: without wrapping Child into memo, 
// it render every time whenever ReactMemo component state will be changed. 
// Refernce : https://react.dev/reference/react/memo

const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <div>Handle click count</div>
            <h4>{count}</h4>
            <Child />
            <button onClick={increase}>click to increase</button>
        </div>
    )
}

export default ReactMemo

