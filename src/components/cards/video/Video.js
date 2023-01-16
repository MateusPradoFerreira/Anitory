import { VideoContainer, VideoPlayer } from "./Video.styles";
import SVGplay1 from "../../../assets/svgs/playCircle.svg"

function Video({ css, thumb, radii, shadow, onClick }) {
    return (
        <VideoContainer onClick={onClick} shadow={shadow} radii={radii} css={{ ...css, backgroundImage: `url('${thumb}')` }}>
            <VideoPlayer src={SVGplay1} alt='icon' />
        </VideoContainer>
    );
}

export default Video;