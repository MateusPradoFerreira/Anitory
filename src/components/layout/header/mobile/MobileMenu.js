import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogContentCSS, DialogOverlayCSS } from './MobileMenu.styles';
import { Button } from '../../../generals/button/Buttom';
import SVGmenu from '../../../../assets/svgs/menu.svg';
import { Container } from '../../../../containers/Container';
import { Logo } from '../../../generals/logo/Logo';
import NavBar from '../../../generals/navbar/NavBar';

var navBarList = [
    { name: 'Home', href: '/' },
    { name: 'Animes', href: '/animes' },
    { name: 'Mangas', href: '/mangas' },
    { name: 'About', href: '/about' },
];

const MobileMenu = () => (
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

                <NavBar vertical navList={navBarList} css={{ marginTop: 30, }} />
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default MobileMenu;