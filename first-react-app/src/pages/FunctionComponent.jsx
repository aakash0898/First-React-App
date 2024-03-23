import React, {useState} from 'react';
import BaseHoc from '../hoc/BaseHoc';

const FunctionComponent = ({name, age, author, setName}) => {
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
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
            <h4> My Name is: {name} age {age} nickName {author}</h4>
            <input onChange={(e)=> setChangeName(e.target.value)} />
            {/*<button onClick={()=> props.setName(changeName)}>Change name</button>*/}
            <button onClick={()=> setName(changeName)}>Change name to....</button>
        </div>
    )
}

export default BaseHoc(FunctionComponent);

//props: {
//    name: "DevTown",
//    age: 25,
//    author: "AK"
//}