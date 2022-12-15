import { Link } from "react-router-dom";

function CardAnime(props) {

    var positions = '';
    var i = 0;

    props.positions.map((position) => {
        if (i === 0) {
            positions = positions + position;
        } else {
            positions = positions + ' | ' + position;
        }
        i++;
    })

    if (positions === '') {
        positions = 'Posição indefinida'
    }

    return (
        <div className="c-cardAnime">
            <a href={props.url} target='_blank'>
                <img className="c-cardAnime__capa" src={props.ft} alt='foto' />
            </a>
            <p className="c-cardAnime__genres" >{positions}</p>
            <p className="c-cardAnime__name" >{props.name}</p>
        </div>
    );
}

export default CardAnime;