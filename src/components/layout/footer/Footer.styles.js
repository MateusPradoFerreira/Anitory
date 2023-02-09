import { css, styled } from "../../../services/stitchesConfig";

export const FooterRedAreaCSS = css({
    height: 180,
    marginTop: 50,
    background: '#DC3535',
    borderTop: '5px solid #FA6F65',

    '@mobile': {
        height: 'fit-content'
    }
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

export const FooterTohruIMGCSS = css({
    width: 291,
    height: 288,

    '@tablet': {
        display: 'none',
    }
})

export const FooterSection = styled('div', {
    maxWidth: 300,
})

export const SectionTitle = styled('h4', {
    marginBottom: 10,
    fontWeight: 600,
    fontSize: 18,
    color: '#FFFFFF',
})

export const SectionContent = styled('div', {
    fontWeight: 400,
    fontSize: 12,
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
})

export const SectionAnchor = styled('a', {
    fontWeight: 400,
    fontSize: 12,
    color: '#FFFFFF',
    textDecoration: 'none',
})

export const Icons = styled('div', {
    display: 'flex',
    gap: 10,
    marginTop: 10,
})

export const Icon = styled('a', {
    color: 'White',
})

export const IconCSS = css({
    width: 24,
    height: 24,
})