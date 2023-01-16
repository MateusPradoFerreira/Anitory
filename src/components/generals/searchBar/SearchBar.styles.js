import { css, styled } from "../../../services/stitchesConfig";

export const SearchBarForm = styled('form', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7px 10px',
    borderRadius: 10,
    border: '2px solid $red300',

    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
        '-webkit-text-fill-color': 'black !important',
        '-webkit-box-shadow': '0 0 0px 1000px #fff inset',
        transition: 'background-color 5000s ease-in-out 0s',
    },
})

export const SearchBarButton = styled('button', {
    backgroundColor: 'transparent',
    width: 16,
    height: 16,
    cursor: 'pointer',
    border: 'none',

    'img': {
        width: 18,
        height: 18,
        marginTop: '-2px'
    }
})

export const SearchBarInput = styled('input', {
    width: '100%',
    height: '60%',
    fontSize: 11,
    border: 'none',

    '&:focus': {
        outline: 'none',
    }
})