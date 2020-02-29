import React, { useState, useEffect } from 'react'

function Counter() {
    //use state except intial value of the state variable
    //count is started with 0

    //use state hook returns 
    //  1. the state variable 
    // 2. call back to change the variable
    const [count, setCount] = useState(0);
    //effects run after the rendering is done

    useEffect(() => {
        //update the document title
        document.title = `you have clicked ${count} times`;
    }, [count])
    /*<--- tell react only run effect if count changes*/

    //count can props.[some property] 
    //tell react to only change a variable based any other values received as props

    /* useEffect(() => {
        //some logic here
        document.title = `you have clicked ${count} times`;
    }, []) */
    //AVOID THIS 
    //This effect will run only once the component is mounted
    //not on every re-render





    return (
        <div>
            <p>
                You clicked {count} times
            </p>
            <button onClick={() => { setCount(count + 1) }} >
                Click me
            </button>
        </div>
    )
}

export default Counter;