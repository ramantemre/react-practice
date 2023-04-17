import { useMemo } from "react";

const UseMemoHook = () => {

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
            Render Memo Hook Component : 
            {delayRendering()}
        </div>
    )
}

export default UseMemoHook