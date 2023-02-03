import { styled } from "../../services/stitchesConfig";

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