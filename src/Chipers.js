import React, {useState} from "react";

const Chipers = ()=>{
    const [count , setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count + 1)
    }

    return(
        <div>
           <button onClick={handleClick}>NOM NOM NOM</button> 
           <p>{count}</p>
        </div>
        
    )
}

export default Chipers