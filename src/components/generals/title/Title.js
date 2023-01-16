import { styled } from "../../../services/stitchesConfig";

export const Title = styled('h1', {
    variants: {
        size: {
            18: {
                fontSize: 18,
            },
            24: {
                fontSize: 24,
            },
            42: {
                fontSize: 42,
            },
        },
        color: {
            grey: {
                color: '$grey700',
            },
            black: {
                color: '$black',
            },
            white: {
                color: 'white',
            }
        },
        fontWeight: {
            sm: {
                fontWeight: 400,
            },
            md: {
                fontWeight: 600,
            },
            lg: {
                fontWeight: 700,
            },
        },
        nowrap: {
            true: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }
        },
        embroidery: {
            true: {
                paddingBottom: 5,
                borderBottom: '2px solid #9C9C9C',
            },
        },
    },

    defaultVariants: {
        color: 'black',
        size: '24',
        nowrap: false,
        fontWeight: 'md',
    }
})