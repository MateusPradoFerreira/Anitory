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
                width: 'calc(100% - 380px)',
                maxWidth: 800,

                '@iPad': {
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
