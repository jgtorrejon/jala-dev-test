import PropTypes from "prop-types";

function TextInput (props) {
    return(
        <div className="mb-4">
            { props.label && 
                <label className="mr-10 font-bold">{props.label}</label>
            }
            <input 
                value={props.value} 
                onChange={(e) => props.update(e.target.value)}
                className="h-10 rounded-md px-2"
            />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
}

export default TextInput;