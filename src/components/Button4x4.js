function Button(props) {
    return (
        <button className="c-button__min" onClick={props.activeFunction} >
            <img src={props.icon} alt='icon' />
        </button>
    );
}

export default Button;