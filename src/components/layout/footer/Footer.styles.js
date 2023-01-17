import { css } from "../../../services/stitchesConfig";

export const FooterRedAreaCSS = css({
    backgroundColor: '$red300',
    height: 120,
    marginTop: 50,
})

export const FooterBlackAreaCSS = css({
    backgroundColor: '$grey900',
    height: 40,
    display: 'flex',
    alignItems: 'center',

    '@tablet': {
        paddingLeft: 20
    }
})

export const FooterMalIMGCSS = css({
    width: 140,
    height: 31,
    objectFit: 'cover',
    filter: 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(325%) hue-rotate(59deg) brightness(115%) contrast(100%)',
})

export const FooterTohruIMGCSS = css({
    width: 227,
    height: 224,

    '@mobile': {
        display: 'none',
    }
})