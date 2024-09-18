import Input from "./GetInputs"

function Experience(props) {
    return (
        <>
        <details>
            <summary>Professional Experience <span className="material-symbols-outlined">
work
</span></summary>
      <form id="experience">
      <div className="form-experience">
          <label htmlFor="company">Company name:</label>
          <Input
          placeholder="Enter Company's name" setInputVal={props.setInputVal6} />
      </div>
      <div className="form-experience">
          <label htmlFor="position">Position Title:</label>
          <Input
          placeholder="Enter Position's title" setInputVal={props.setInputVal7} />
      </div>
      <div className="form-general">
          <label htmlFor="startdate">Start Date:</label>
          <input name="startdate" id="startdate" type="date" />
      </div>
      <div className="form-general">
          <label htmlFor="enddate">End Date:</label>
          <input name="enddate" id="enddate" type="date" />
      </div>
      <div className="form-general">
          <label htmlFor="tasks">Main responsibilities::</label>
          <textarea id="tasks" name="tasks" rows="4" cols="25">
            </textarea>
      </div>
    </form>
    <button>Add</button>
    </details>
        
        </>
    )
}

export default Experience