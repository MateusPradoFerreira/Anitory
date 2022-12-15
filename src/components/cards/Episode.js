import Trailer from "./Trailer";

function Episode(props) {
    return (
        <div className="c-cardEpisode">
            <a href={props.link} target='_blank'>
                <Trailer src={props.img} width='120px' height='62px' sizeButton='Low' />
                <div className="c-cardEpisode__box">
                    <h2 className='c-cardEpisode__episode'>{props.ep}</h2>
                    <p className='c-cardEpisode__title'>{props.title !== '' ? props.title : props.alternativeText} </p>
                </div>
            </a>
        </div>

    );
}

export default Episode;