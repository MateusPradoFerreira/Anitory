// SVGs
import SVGsearch from '../Svg/All/broken/search-normal-2.svg';

function SearchBar(props) {
    return (
        <form>
            <div className='c-searchBar'>
                <input type='text' id='input' placeholder='Busque pelos seus animes favoritos' />
                <button type='submit' onClick={(e) => props.buscar(e, 1)}>
                    <img src={SVGsearch} alt='ssv' />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;