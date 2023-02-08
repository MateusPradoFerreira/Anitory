import { VideoContainer, VideoPlayer } from "./Video.styles";
import SVGplay1 from "../../../assets/svgs/playCircle.svg"
import TrailerNotFound from "../../../assets/images/TrailerNotFound.png";

function Video({ css, thumb, radii, shadow, onClick }) {
    return (
        <VideoContainer onClick={onClick} shadow={shadow} radii={radii} css={{ ...css, backgroundImage: `url('${thumb ? thumb : TrailerNotFound}')` }}>
            <VideoPlayer src={SVGplay1} alt='icon' />
        </VideoContainer>
    );
}

export default Video;