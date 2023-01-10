import formatNameList from '../../utils/formatNameList';
import SVGstar from '../../assets/Svg/All/broken/star.svg';

function MostWatched({ src, alt, name, genres, score, onClick }) {
    return (
        <div className="c-mostWatched" onClick={onClick}>
            <img src={src} alt={alt} className='c-mostWatched__img' />
            <div className='c-mostWatched__content'>
                <h5 className='c-mostWatched__name'>
                    {name}
                </h5>
                <p className='c-mostWatched__genres'>
                    {formatNameList(genres)}
                </p>
                <div className='c-mostWatched__ff'>
                    <img src={SVGstar} alt={'star'} className='c-mostWatched__star' />
                    <p className='c-mostWatched__score'>
                        {score}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MostWatched;