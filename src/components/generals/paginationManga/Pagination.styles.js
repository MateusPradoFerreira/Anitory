import { styled } from "../../../services/stitchesConfig";

export const PaginationContainer = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
})

export const PaginationButton = styled('button', {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: 12,
    borderRadius: 10,

    variants: {
        off: {
            true: {
                border: '2px solid #f44336',
                backgroundColor: 'transparent',
                color: '$red300',
            },
            false: {
                backgroundColor: '$red300',
                color: 'White',
                border: 'none',
            }
        },
    },
})