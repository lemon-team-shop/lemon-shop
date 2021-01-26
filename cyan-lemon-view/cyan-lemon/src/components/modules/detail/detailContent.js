import React, { useState, useEffect } from 'react';
// import axios from 'axios'
export function DetailContent(props) {
    const [date, setDate] = useState(new Date())
    useEffect(() => { // componentDidMount \componentDidUpdate\ componentWillUnmount的集合
        
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, []) //谁的值改变了执行 
    return (<div>
        {date.toLocaleTimeString()}
    </div>)
}