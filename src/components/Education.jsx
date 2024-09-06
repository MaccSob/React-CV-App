
import Input from "./GetInputs"

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
          placeholder="Enter Study Name:" setInputVal={props.setInputVal5} />
      </div>
      <div className="form-education">
          <label htmlFor="studydate">Study Date:</label>
          <input name="studydate" id="studydate" type="date"/>
      </div>
    </form>
        </details>
        
    </>
    )
}







export default Education