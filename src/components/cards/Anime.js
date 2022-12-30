import { Link } from "react-router-dom";
import formatNameList from "../../utils/formatNameList";

function CardAnime(props) {
    var genres = formatNameList(props.genres);
    return (
        <div className="c-cardAnime">
            <Link to={'/anime/' + props.id} onClick={() => {window.scroll(0, 0)}}>
                <img className="c-cardAnime__capa" src={props.capa} alt='capa'/>
            </Link>
            <p className="c-cardAnime__genres" >{genres === '' ? 'Gênero indefinido' : genres}</p>
            <p className="c-cardAnime__name" >{props.name}</p>
        </div>
    );
}

export default CardAnime;