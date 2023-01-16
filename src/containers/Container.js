import { styled } from '../services/stitchesConfig';

export const Container = styled('div', {
    variants: {
        grey: {
            true: {
                backgroundColor: '$grey50',
                padding: 30,
                borderRadius: 10,
            },
        },
        animeheader: {
            true: {
                height: 200,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 860,

                '@mobile': {
                    display: 'none'
                }
            },
        },
        borderBottom: {
            true: {
                borderBottom: '2px solid #9C9C9C',
            },
        },
    },
});
