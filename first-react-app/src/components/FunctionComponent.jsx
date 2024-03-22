import React, {useState} from 'react';

const FunctionComponent = (props) => {
    const [count, setCount] = useState(0);
    const reduceCount = () =>{
        setCount(count-1)
    }
    return (
        <div>
            <p>
                This is function component
            </p>
            <button onClick = {()=>setCount(count+1)}>click me to increment by 1</button>
            <button onClick={reduceCount}> Click to decrement by 1</button>
            <h2>{count}</h2>
            <h4> My Name is: {props.name} age {props.age} nickName {props.author}</h4>
            <button onClick={()=> props.setName("Aakash Singh")}>Change name</button>
        </div>
    )
}

export default FunctionComponent;

//props: {
//    name: "DevTown",
//    age: 25,
//    author: "AK"
//}