// router
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav>
            <ul className="c-navBar2">
                {props.itensList.map((item) => (
                    <a key={item.item} href={item.link}><li className='c-navBar__link'>{item.item}</li></a>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;