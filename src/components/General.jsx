

import Input from "./GetInputs"

function General(props) {

  return (
    <>
    <details>
      <summary>General Info <span className="material-symbols-outlined">
person

</span></summary>
    <div className='generalInfo'>
    <form id="general">
    <div className="form-general">
        <label htmlFor="name">Name</label>
        <Input
          placeholder="Enter name" setInputVal={props.setInputVal} />
    </div>
    <div className="form-general">
        <label htmlFor="phone">Phone</label>
        <Input
          placeholder="Enter name" setInputVal={props.setInputVal2} />
    </div>
    <div className="form-general">
        <label htmlFor="email">E-mail</label>
        <Input placeholder="Enter E-mail" setInputVal={props.setInputVal3}/>
    </div>

  </form> 

                      
    </div>
    </details>
    </>
  )
}

export default General
