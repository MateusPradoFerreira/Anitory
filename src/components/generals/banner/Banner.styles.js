import { styled } from '../../../services/stitchesConfig';

export const BannerCSS = styled('div', {
    width: '100%',
    height: 360,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTop: '5px solid #d81b60',
    boxShadow: 'inset 0px 4px 200px #1f1f1f',

    variants: {
        blur: {
            true: {
                filter: 'blur(5px)',
                border: 'none',
            },
        },
        dark: {
            true: {
                boxShadow: 'inset 0px 4px 180px 100px #262626',
            },
        },
        top: {
            true: {
                backgroundPositionY: 'top',
            },
        },
        noShadow: {
            true: {
                boxShadow: 'none',
            },
        },
    },
});
