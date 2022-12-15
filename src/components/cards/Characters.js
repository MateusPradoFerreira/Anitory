function CardAnime(props) {
    return (
        <div className="c-cardAnime">
            <img className="c-cardAnime__capa" src={props.ft} alt='foto' />
            <p className="c-cardAnime__genres" >{props.role}</p>
            <p className="c-cardAnime__name" >{props.name}</p>
        </div>
    );
}

export default CardAnime;