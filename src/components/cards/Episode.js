import Trailer from "./Trailer";

function Episode(props) {
    return (
        <div className="c-cardEpisode">
            <Trailer src={props.img} width='120px' height='62px' sizeButton='Low' link={props.link} />
            <div className="c-cardEpisode__box">
                <h2 className='c-cardEpisode__episode'>{props.ep}</h2>
                <p className='c-cardEpisode__title'>{props.title !== '' ? props.title : props.alternativeText} </p>
            </div>
        </div>

    );
}

export default Episode;