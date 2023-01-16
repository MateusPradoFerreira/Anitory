import { styled } from "../../../services/stitchesConfig";

export const VideoContainer = styled('div', {
    width: 300,
    height: 160,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '$black',

    variants: {
        radii: {
            true: {
                borderRadius: 10,
            },
        },
        shadow: {
            grey: {
                boxShadow: 'inset 0px 0px 100px 5px #3A3A3A',
            },
            dark: {
                boxShadow: 'inset 0px 0px 30px 5px black',
            },
            no: {
                boxShadow: 'none',
            },
        }
    },

    defaultVariants: {
        shadow: 'dark',
    }
})

export const VideoPlayer = styled('img', {
    variants: {
        size: {
            sm: {
                width: 16,
                height: 16,
            },
            md: {
                width: 32,
                height: 32,
            },
            lg: {
                width: 64,
                height: 64,
            },
        },
    },

    defaultVariants: {
        size: 'lg',
    }
})