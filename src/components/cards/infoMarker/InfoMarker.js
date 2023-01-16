import { InfoMarkerContainer } from "./InfoMarker.styles";

function InfoMarker({ marker, content, css }) {
    return (
        <InfoMarkerContainer css={{ ...css }}>
            <span>{marker}: </span> {content}
        </InfoMarkerContainer>
    );
}

export default InfoMarker;