
import React from "react"
import { useState } from "react";
import { useRef } from "react";
function Skills() {

  // Create a new reference which will be applied
  // to the input element
  const ref = useRef(null);

  // Initialise the states
  const [ items, setItems ] = useState([]);
  const [ input, setInput ] = useState('');

  // When the input value changes update
  // the `input` state
  function handleChange(e) {
    setInput(e.target.value);
  }

  // When the button is clicked add the
  // `input` state to the `items` state,
  // reset the `input` state, and focus on 
  // the input element
  function handleClick() {
    setItems([...items, input]);
    setInput('');
    ref.current.focus();
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
       // call action
       setItems([...items, input]);
       setInput('');
       ref.current.focus();
   }
 }

  // `map` over the items array to produce an
  // array of list items
  return (
    <details>
        <summary>Skills<span className="material-symbols-outlined">
draw
</span></summary>
    <div>
      <input
        ref={ref}
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add</button>
      <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
    </details>
  );
}
export default Skills