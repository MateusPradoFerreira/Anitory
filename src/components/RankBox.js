function RankBox(props) {
    return (
        <div className="c-rankBox" style={{backgroundColor: props.color}}>
            <p className="c-rankBox__top">{props.textTop}</p>
            <p className="c-rankBox__center">{props.textCenter}</p>
            <p className="c-rankBox__bottom">{props.textBottom}</p>
        </div>
    );
}

export default RankBox;