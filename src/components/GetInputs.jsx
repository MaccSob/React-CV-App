

function Input(props) {
    function listenToInput(e) {
        props.setInputVal(e.target.value);
    }
    

    return (
        <div className="input-holder">
            <input
                type={props.type || 'text'}
                placeholder={props.placeholder}
                onChange={listenToInput} />
        </div>
        
    )
}


export default Input 