// router
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav>
            <ul className="c-navBar">
                {props.itensList.map((item) => (
                    <Link key={item.item} to={item.link}><li className='c-navBar__link'>{item.item}</li></Link>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;