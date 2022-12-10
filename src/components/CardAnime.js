import { Link } from "react-router-dom";

function CardAnime(props) {

    var genres = ''; 
    var i = 0;
    
    props.genres.map((genre) => {
        if (i === 0) {
            genres = genres + genre.name;
        } else {
            genres = genres + ' | ' + genre.name;
        }
        i++;
    })

    return (
        <div className="c-cardAnime">
            <Link to={'/anime?id=' + props.id}>
                <img className="c-cardAnime__capa" src={props.capa} alt='capa' />
            </Link>
            <p className="c-cardAnime__genres" >{genres}</p>
            <p className="c-cardAnime__name" >{props.name}</p>
        </div>
    );
}

export default CardAnime;