import useSearchStore from "../../store/useSearchStore";

function NavBar(props) {
    const setCurrentAnimePath = useSearchStore(state => state.setCurrentAnimePath);

    return (
        <nav>
            <ul className="c-navBarAnime">
                {props.navBarList.map((item) => (
                    <li key={item.placeholder} onClick={() => setCurrentAnimePath(item.path)} className="c-navBarAnime__bnt"> {item.placeholder} </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;