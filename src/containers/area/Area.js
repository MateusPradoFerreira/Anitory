import { AreaCSS } from "./Area.styles";

function Area({ children, name }) {
    return (
        <AreaCSS css={{ gridArea: `'${name}'` }}>
            {children}
        </AreaCSS>
    );
}

export default Area;