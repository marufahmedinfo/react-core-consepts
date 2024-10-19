import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    function handelAdd(){
        const newCount = count + 1;
        setCount(newCount)
    };
    const handelReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div className="styling">
            <h3>Count : {count}</h3>
            <button className='add' onClick={handelAdd}>Add</button>
            <button className='reduce' onClick={handelReduce}>Reduce</button>
        </div>
    )
}