import { Link } from 'react-router-dom';
import { LogoAnchorCSS } from './Logo.styles';

export const Logo = ({ children, center }) => {
  return (
    <h1 style={center ? { textAlign: 'center' } : {}}>
      <Link to={'/'} className={LogoAnchorCSS()}>
        {children}
      </Link>
    </h1>
  );
};
