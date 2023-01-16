import { styled } from "../../../services/stitchesConfig";

export const InfoMarkerContainer = styled('p', {
    fontSize: 12,
    margin: '5px 0',
    color: '$grey700',

    'span': {
        color: '$red300',
        fontWeight: 600,
        textTransform: 'capitalize',
    }
})