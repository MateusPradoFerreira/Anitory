// SVGs
import SVGsearch from '../Svg/All/broken/search-normal-2.svg';

function SearchBar(props) {
    return (
        <form>
            <div className='c-searchBar'>
                <input type='text' id='input' placeholder='Busque pelos seus animes favoritos' />
                <button className='c-searchBar__button' type='submit' onClick={(e) => props.buscar(e, document.getElementById('input').value, 1)}>
                    <img src={SVGsearch} alt='ssv' />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;