import React, { useState, memo, useCallback } from "react"

const Child = memo((props) => {
    return(
        <div>
            {console.log("memo with useCallback")}
            <h4>Child Component</h4>
            <button onClick={props.increase}>click to increase</button>
        </div>
    )
})

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const increase = useCallback(() => {
        setCount((prevState) => prevState + 1)
    }, [setCount])
    return (    
        <div>
            <div>Handle click count</div>
            <h4>{count}</h4>
            <Child increase={increase}/>
        </div>
    )
}

export default UseCallBack

