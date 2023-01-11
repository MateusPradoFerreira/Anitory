// Components
import NavBar from "../navBar/HeaderNavBar";
import FlexContainer from "../../containers/FlexContainer";
import Button4x4 from "../Button4x4";

// svg
import SVGSearch from '../../assets/Svg/All/broken/search-normal-1.svg';
import SVGRandom from '../../assets/Svg/All/broken/arrange-circle-2.svg';
import SVGmenu from '../../assets/Svg/All/broken/menu-1.svg';
import SVGclose from '../../assets/Svg/All/broken/close-circle.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(true);

    var NavBarList = [
        { item: 'Home', link: '/' },
        { item: 'Animes', link: '/animes' }
    ];

    function random() {
        window.location.href = '/anime/random';
    };

    function seach() {
        window.location.href = '/animes';
    };

    if (isOpen) {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no"
    } else {
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes"
    }

    return (
        <>

            <header className="l-header">
                <h1 className="c-title__logo"> <Link to='/'>Anitory</Link> </h1>
                <div className="c-sum">
                    <NavBar itensList={NavBarList} />
                </div>
                <div className="c-sum">
                    <FlexContainer size='135px' display='flex' justify='right' gap='20px'>
                        <Button4x4 activeFunction={random} icon={SVGRandom} />
                        <Button4x4 activeFunction={seach} icon={SVGSearch} />
                    </FlexContainer>
                </div>
                <div className="c-sub">
                    <Button4x4 activeFunction={() => setIsOpen(!isOpen)} icon={SVGmenu} />
                </div>
            </header>

            {isOpen && (
                <div className="c-subMenu">
                    <h1 className="c-title__logo"> <Link to='/' style={{ color: 'white' }}>Anitory</Link> </h1>
                    <Button4x4 activeFunction={() => setIsOpen(!isOpen)} icon={SVGclose} />
                    <ul className="c-subMenu__ul">
                        {NavBarList.map((item) => (
                            <Link className="c-subMenu__li" key={item.item} to={item.link}><li>{item.item}</li></Link>
                        ))}

                        <li className="c-subMenu__li">Surpreenda Me</li>
                        <li className="c-subMenu__li">Buscar</li>
                    </ul>
                </div>
            )}

        </>
    );
}

export default Header;