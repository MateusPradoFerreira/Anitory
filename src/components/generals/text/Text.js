import { styled } from "../../../services/stitchesConfig";

export const Text = styled('p', {
    variants: {
        size: {
            11: {
                fontSize: 11,
            },
            12: {
                fontSize: 12,
            },
            14: {
                fontSize: 14,
            },
            16: {
                fontSize: 16,
            },
        },
        color: {
            grey: {
                color: '$grey700',
            },
            black: {
                color: '$black',
            },
            yellow: {
                color: '$yellow600',
            },
            white: {
                color: 'white',
            },
            red: {
                color: '$red300',
            },
        },
        lineHeight: {
            none: {
                lineHeight: 0,
            }
        },
        fontWeight: {
            sm: {
                fontWeight: 400,
            },
            md: {
                fontWeight: 500,
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
        }
    },

    defaultVariants: {
        color: 'black',
        size: '16',
        nowrap: false,
        fontWeight: 'sm'
    }
})