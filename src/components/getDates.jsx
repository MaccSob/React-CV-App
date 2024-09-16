



function Dates(props) {
    function listenToDate(e) {
        props.setDateVal(e.target.value);
    }
    

    return (
        <div className="input-holder">
            <input
                type={props.type || 'date'}
                placeholder={props.placeholder}
                onChange={listenToDate} />
        </div>
        
    )
}


export default Dates 