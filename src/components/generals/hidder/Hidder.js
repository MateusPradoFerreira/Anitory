import { styled } from "../../../services/stitchesConfig";

export const Hidder = styled('div', {
    overflow: 'hidden',

    variants: {
        border: {
            true: {
                borderTop: '5px solid #d81b60',
            },
        },
        boxShadow: {
            true: {
                boxShadow: 'inset 0px 4px 180px 100px #262626',
            },
        },
    },
})