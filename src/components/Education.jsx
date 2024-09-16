
import Input from "./GetInputs"
import Dates from "./getDates"

function Education(props) {
      return (
      <>
      <details>
        <summary>Education History <span className="material-symbols-outlined">school</span></summary>
      <form id="education">
      <div className="form-education">
          <label htmlFor="school">School:</label>
          <Input
          placeholder="Enter school's name" setInputVal={props.setInputVal4} />
      </div>
      <div className="form-education">
          <label htmlFor="study">Study:</label>
          <Input
          placeholder="Enter Degree/Field Of Study :" setInputVal={props.setInputVal5} />
      </div>
      <div className="form-education">
          <label htmlFor="studydate">Start Date:</label>
          <Dates
          placeholder="Enter Degree/Field Of Study :" setInputVal={props.setDateVal} />
      </div>
      <div className="form-education">
          <label htmlFor="studydate">End Date:</label>
          <input name="studydate" id="studydate" type="date"/>
      </div>
    </form>
    <button>Add</button>
        </details>
        
    </>
    )
}







export default Education