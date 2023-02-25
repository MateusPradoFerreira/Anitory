import { SearchBarForm, SearchBarButton, SearchBarInput } from "./SearchBar.styles";
import SVGsearch from "../../../assets/svgs/search2.svg";

function SearchBar({ placeholder, onSubmit, css }) {
    return (
        <SearchBarForm css={{ ...css }} onSubmit={(e) => { e.preventDefault(); onSubmit(document.getElementById('input').value); }}>
            <SearchBarInput type='text' id='input' placeholder={placeholder} />
            <SearchBarButton type='submit'> <img src={SVGsearch} alt='ssv' /> </SearchBarButton>
        </SearchBarForm>
    );
}

export default SearchBar;