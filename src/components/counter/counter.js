import React, { useState, useEffect } from 'react'

const changeTitleEffect = (count) => {
    document.title = `you have clicked ${count} times`
}
function Counter() {
    //use state accepts intial value of the state variable
    //count is started with 0

    //useState hook returns an array containing
    //  1. the state variable 
    // 2. call back to change the variable

    //https://reactjs.org/docs/hooks-reference.html#usestate
    const [count, setCount] = useState(0);
    //effects run after the rendering is done

    // 1. 
    useEffect(() => {
        //update the document title
        changeTitleEffect(count);
    }, [count])
    /*<--- tell react only run effect if count changes*/

    //count can be props.[some property] 
    //tell react to only change a variable based any other values received as props

    // 2. 
    /* useEffect(() => {
        //some logic here
        document.title = `you have clicked ${count} times`;
    }, []) */
    //AVOID THIS 
    //This effect will run only once the component is mounted
    //not on every re-render

    //adding the variable will solve the bug 
    //but if we do not want our component to render so frequently

    //3.
    // useEffect(() => {
    //     //update the document tiltle
    //     document.title = `you have clicked ${count} times`

    //     const id = setInterval(() => {
    //         // if count has changed only then call setCount and a render of that component??

    //         setCount(count+1);/*if (count) is the argument this effect as [1]*/
    //     }, 1000);

    //     return () => clearInterval(id);

    // })



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