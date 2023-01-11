function Button2(props) {
    return (
        <button className="c-button__mim" onClick={props.activeFunction} >
            {props.children}
        </button>
    );
}

export default Button2;