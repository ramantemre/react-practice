import React, { useState, memo, useCallback, useMemo } from "react"

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

    const delayRendering = useMemo(() => {
        let i = 0
        console.time("time");
        while (i < 10) {
            i++;
            console.log("inside while");
        }
        console.timeEnd("time");
        return 90;
    }, [])

    return (    
        <div>
            <div>Handle click count</div>
            <h4>{count}</h4>
            <Child increase={increase}/>
            <div>
            Render Memo Hook Component : 
            {delayRendering}
            </div>
        </div>
    )
}

export default UseCallBack

