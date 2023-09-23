import { useState } from "react";

const AddButton = () => {
  const [count, setCount] = useState(0);
  
  const add = () => {
    setCount(count + 1);
  }

  return (
        <div>
          <button onClick={add} style={{background:"Gray", padding: 8, borderRadius: 6}}>
            Add 
          </button>
          <div>
           {count}
          </div>
        </div>
    )
}

export default AddButton;