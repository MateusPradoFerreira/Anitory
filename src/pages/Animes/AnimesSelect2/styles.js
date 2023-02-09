import { styled } from "../../../services/stitchesConfig";

export const SelectTrigger = styled('div', {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: '0px 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: 'white',
    color: '$grey900',
    border: '2px solid $red300',
    outline: 'none',

    '@tablet': {
        width: '100%',
    }
})

export const SelectContent = styled('div', {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    position: 'absolute',
    display: 'none',

    variants: {
        open: {
            true: {
                display: 'block',
            }
        }
    }
})

export const SelectViewport = styled('div', {
    padding: 20,
})

export const SelectContainer = styled('div', {
    '@tablet': {
        width: '100%',
    }
})

export const SelectValue = styled('input', {
    width: '100%',
    border: 'none',
    backgroundColor: 'White',
    outline: 'none',
})

export const SelectItem = styled('button', {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    fontSize: 14,
    marginBottom: 5,
    outline: 'none',
    cursor: 'pointer',
    color: '$grey900',
    position: 'relative',
    border: 'none',
    backgroundColor: 'White',

    '&:hover': {
        color: '$red300',
    }
})
