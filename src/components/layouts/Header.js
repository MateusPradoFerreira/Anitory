// Components
import NavBar from "../NavBar";
import FlexContainer from "../../containers/FlexContainer";
import Button4x4 from "../Button4x4";

// svg
import SVGSearch from '../../Svg/All/broken/search-normal-1.svg';
import SVGRandom from '../../Svg/All/broken/arrange-circle-2.svg';
import { Link } from "react-router-dom";

function Header() {

    var NavBarList = [
        { item: 'Home', link: '/' },
        { item: 'Animes', link: '/animes' },
        { item: 'Personagens', link: '/personagens' }
    ];

    function random() { 
        window.location.href = '/anime';
    };

    function seach() {
        window.location.href = '/animes';
    };

    return (
        <header className="l-header">
            <h1 className="c-title__logo"> <Link to='/'>Anitory</Link> </h1>
            <NavBar itensList={NavBarList} />
            <FlexContainer size='135px' display='flex' justify='right' gap='20px'>
                <Button4x4 activeFunction={random} icon={SVGRandom} />
                <Button4x4 activeFunction={seach} icon={SVGSearch} />
            </FlexContainer>
        </header>
    );
}

export default Header;