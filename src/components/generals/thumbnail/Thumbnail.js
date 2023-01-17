import { styled } from "../../../services/stitchesConfig";

export const Thumbnail = styled('img', {
    width: 300,
    height: 430,
    objectFit: 'cover',

    variants: {
        radii: {
            true: {
                borderRadius: 10,
            },
        },
    },
})