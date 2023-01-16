import { Link } from "react-router-dom";
import { Text } from "../../generals/text/Text";
import { CardCharacterAnchorCSS, CardCharacterThumbnailCSS } from "./CardCharacter.styles";
import { Loading } from "../../loading/Loading";

function CardCharacter({ role, thumbnail, name, isLoading }) {
    if (isLoading) {
        return (
            <div className={CardCharacterAnchorCSS()}>
                <Loading radii width={'100%'} css={{ height: 300, '@mobile': { height: '55vw', } }} />
                <Loading radii width={'100%'} height={10} css={{ marginTop: 5 }} />
                <Loading radii width={'100%'} height={20} css={{ marginTop: 5 }} />
            </div>
        )
    }

    return (
        <div className={CardCharacterAnchorCSS()}>
            <img className={CardCharacterThumbnailCSS()} src={thumbnail} alt={name} />
            <Text size={'11'} color={'grey'} nowrap>{role}</Text>
            <Text size={'14'} nowrap>{name}</Text>
        </div>
    );
}

export default CardCharacter;
