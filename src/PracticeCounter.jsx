import { useState } from "react"

export default function PracticeCounter () {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    const PracticeCounterStyle ={
        border: '2px solid green',
        marginTop: '20px',
        padding: '13px',
        borderRadius: '12px'
    }

    return (
        <div style={PracticeCounterStyle}>
            <h3>Practice Counter</h3>
            <h4>Counter: {count}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}