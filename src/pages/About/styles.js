import { css, styled } from "../../services/stitchesConfig";
import { RiLinksLine } from 'react-icons/ri';

export const Heading = styled('h1', {
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
    color: '$grey900',
    marginTop: 70,
    textTransform: 'uppercase',
})

export const Description = styled('p', {
    fontSize: 16,
    maxWidth: 480,
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 400,
    color: '$grey900',

    '@mobile': {
        fontSize: 14,
    }
})

export const CreditsSection = styled('div', {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
})

export const CreditsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 60,
    padding: '0px 120px',
    flexWrap: 'wrap',

    '@mobile': {
        padding: 0,
        justifyContent: 'center',
    }
})

export const CreditAnchor = styled('a', {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '$black',
    textTransform: 'capitalize',
    textDecoration: 'none',
    marginBottom: 2,
    fontSize: 14,

    '&:hover': {
        color: '$red300'
    }

})

export const CreditsHeading = styled('div', {
    marginBottom: 15,
    color: '$black',
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
})

export const IconCSS = css({
    width: 24,
    height: 24,
})


export const Icon = () => (
    <RiLinksLine className={IconCSS()} />
)