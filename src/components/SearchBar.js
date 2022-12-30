// SVGs
import SVGsearch from '../assets/Svg/All/broken/search-normal-2.svg';
import useSearchStore from '../store/useSearchStore';

function SearchBar() {
    const setCurrentSearch = useSearchStore(state => state.setCurrentSearch);

    return (
        <form onSubmit={(e) => { e.preventDefault(); setCurrentSearch(document.getElementById('input').value) }}>
            <div className='c-searchBar'>
                <input type='text' id='input' placeholder='Busque pelos seus animes favoritos' />
                <button className='c-searchBar__button' type='submit'>
                    <img src={SVGsearch} alt='ssv' />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;