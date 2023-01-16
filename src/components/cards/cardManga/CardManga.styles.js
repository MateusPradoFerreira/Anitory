import { css } from "../../../services/stitchesConfig";

export const CardMangaThumbnailCSS = css({
    width: '100%',
    height: 300,
    borderRadius: 10,
    objectFit: 'cover',

    '@mobile': {
        height: '55vw',
    }
})

export const CardMangaAnchorCSS = css({
    textDecoration: 'none',
    width: 200,
    height: 355,

    '@mobile': {
        width: '46%',
        height: '65vw',

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