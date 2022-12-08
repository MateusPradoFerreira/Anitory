// Components
import NavBar from "./NavBar";
import FlexContainer from "./FlexContainer";
import Button4x4 from "./Button4x4";

// svg
import SVGSearch from '../Svg/All/broken/search-normal-1.svg';
import SVGRandom from '../Svg/All/broken/arrange-circle-2.svg';

function Header() {

    var NavBarList = [
        { item: 'Home', link: '/' },
        { item: 'Animes', link: '/animes' },
        { item: 'Mangas', link: '/mangas' },
        { item: 'Personagens', link: '/personagens' }
    ];

    function teste() {
        console.log('teste')
    };

    var ex = false;

    function exibirInput() {
        if (ex == false) {
            ex = true;
        } else {
            ex = false;
        }
    }

    return (
        <header className="l-header">
            <h1 className="c-title__logo">Anitory</h1>
            <NavBar itensList={NavBarList} />
            <FlexContainer size='180px' display='flex' justify='right' gap='20px'>
                <Button4x4 activeFunction={teste} icon={SVGRandom} />
                <Button4x4 activeFunction={exibirInput} icon={SVGSearch} />
            </FlexContainer>
        </header>
    );
}

export default Header;