import { css } from "../../../services/stitchesConfig";

export const CardAnimeThumbnailCSS = css({
    width: '100%',
    height: 300,
    borderRadius: 10,
    objectFit: 'cover',

    '@mobile': {
        height: '40vw',
    }
})

export const CardAnimeAnchorCSS = css({
    textDecoration: 'none',
    width: 200,
    height: 355,

    '@mobile': {
        width: '30%',
        height: '50vw',

        '&:focus-visible': {
            borderRadius: 5,
            padding: 0,
            outline: '2px solid $red300',

            'img': {
                height: '50vw !important'
            }
        },
    },

    '&:focus-visible': {
        borderRadius: 10,
        padding: 5,
        outline: '2px solid $red300',

        'img': {
            height: 295,
        },
    },
})