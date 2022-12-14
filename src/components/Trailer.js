// SVGs
import icon from '../Svg/All/broken/play-circle.svg';

function Trailer(props) {
    return (
        <a href={props.link} target="_blank" >
            <div className="c-trailer" style={{ height: props.height, width: props.width, backgroundImage: "url('" + props.src + "')" }}>
                <div className='c-trailer__innerBox' >
                    <img className='c-trailer__icon' src={icon} alt='icon' />
                </div>
            </div>
        </a>
    );
}

export default Trailer;