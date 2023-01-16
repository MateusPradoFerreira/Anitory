import { css } from "../../../../services/stitchesConfig";

export const DialogOverlayCSS = css({
    backgroundColor: 'rgba(23, 23, 23, 0.38)',
    position: 'fixed',
    inset: 0,
    zIndex: 99,
})

export const DialogContentCSS = css({
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85vw',
    maxWidth: 450,
    minHeight: '85vh',
    padding: '50px 30px',
    zIndex: 999,
})