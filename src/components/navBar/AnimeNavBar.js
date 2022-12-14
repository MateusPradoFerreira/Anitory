function NavBar(props) {
    return (
        <nav>
            <ul className="c-navBarAnime">
                {props.navBarList.map((item) => (
                    <li key={item.placeholder} className="c-navBarAnime__bnt" onClick={item.function}> {item.placeholder} </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;