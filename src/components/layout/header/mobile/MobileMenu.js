import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogContentCSS, DialogOverlayCSS, List, MobileNavBar, MobileNavItem } from './MobileMenu.styles';
import { Button } from '../../../generals/button/Buttom';
import SVGmenu from '../../../../assets/svgs/menu.svg';
import { Container } from '../../../../containers/Container';
import { Logo } from '../../../generals/logo/Logo';
import { useNavigate } from 'react-router-dom';

const MobileMenu = () => {
    const navigate = useNavigate();

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Container>
                    <Button style={'icon'} radii>
                        <img src={SVGmenu} alt={''} />
                    </Button>
                </Container>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={DialogOverlayCSS()} />
                <Dialog.Content className={DialogContentCSS()}>

                    <Dialog.Close asChild>
                        <Container css={{ display: 'flex', justifyContent: 'right' }}>
                            <Button style={'icon'} radii>
                                X
                            </Button>
                        </Container>
                    </Dialog.Close>

                    <Dialog.Close asChild>
                        <Container css={{ marginTop: '-45px' }}>
                            <Logo center>
                                Anitory
                            </Logo>
                        </Container>
                    </Dialog.Close>

                    <List>
                        <Dialog.Close asChild>
                            <MobileNavItem onClick={() => navigate('/')}> Home </MobileNavItem>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <MobileNavItem onClick={() => navigate('/animes')}> Animes </MobileNavItem>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <MobileNavItem onClick={() => navigate('/mangas')}> Mangas </MobileNavItem>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <MobileNavItem onClick={() => navigate('/about')}> About </MobileNavItem>
                        </Dialog.Close>
                    </List>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};

export default MobileMenu;