import React, { useEffect, useState } from 'react';
import Number from './number.jsx'

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000); // Update every second (1000ms)

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only on mount



    return (
        <div style={{backgroundColor: 'black', height: '100px'}} className="d-flex align-items-center justify-content-around">
            <i className="far fa-clock" style={{fontSize: "50px"}}></i>
            <Number number={Math.floor(count / 100000 % 10)}/>
            <Number number={Math.floor(count / 10000 % 10)}/>
            <Number number={Math.floor(count / 1000 % 10)}/>
            <Number number={Math.floor(count / 100 % 10)}/>
            <Number number={Math.floor(count / 10 % 10)}/>
            <Number number={count / 1 % 10}/>
        </div>
    )
}

export default Counter;