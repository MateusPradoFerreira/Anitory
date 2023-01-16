import { Link } from 'react-router-dom';
import { LogoAnchorCSS } from './Logo.styles';

export const Logo = ({ children }) => {
  return (
    <h1>
      <Link to={'/'} className={LogoAnchorCSS()}>
        {children}
      </Link>
    </h1>
  );
};
