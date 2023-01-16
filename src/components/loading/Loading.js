import { keyframes } from "@stitches/react";
import { styled } from "../../services/stitchesConfig";

export function Loading({ width, height, radii, css }) {
    return (
        <LoadingBox radii={radii} css={{ width: width, height: height, ...css, }}></LoadingBox>
    );
}

const shine = keyframes({
    'to': {
        backgroundPositionX: '-200%',
    },
})

export const LoadingBox = styled('div', {
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    backgroundSize: '200% 100%',
    animation: `1.5s ${shine} linear infinite`,

    variants: {
        radii: {
            true: {
                borderRadius: 10,
            },
        },
    },
})

