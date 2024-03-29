import { Link } from 'react-router-dom';
import { navBarAnchorCSS, NavBarlistCSS, navBarAnchorWhiteCSS } from './NavBar.styles';

function NavBar({ navList, normalAnchor, white, vertical, css }) {
  if (normalAnchor) {
    return (
      <nav>
        <NavBarlistCSS vertical={vertical} css={{ ...css }}>
          {navList.map((item) => (
            <a key={item.name} href={item.href} className={white ? navBarAnchorWhiteCSS() : navBarAnchorCSS()}>
              <li>{item.name}</li>
            </a>
          ))}
        </NavBarlistCSS>
      </nav>
    );
  }

  return (
    <nav>
      <NavBarlistCSS vertical={vertical} css={{ ...css }}>
        {navList.map((item) => (
          <Link key={item.name} to={item.href} className={navBarAnchorCSS()}>
            <li>{item.name}</li>
          </Link>
        ))}
      </NavBarlistCSS>
    </nav>
  );
}

export default NavBar;
