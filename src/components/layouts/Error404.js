import tohruSad from '../../assets/img/tohruSad.png';
import Main from './Main';
import FlexContainer from '../../containers/FlexContainer';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <Main>
            <FlexContainer display='flex' size='100%' wrap='wrap' justify='center'>
                <FlexContainer size='374px' display='flex' wrap='wrap' justify='center'>
                    <img className='c-errorTohru' src={tohruSad} alt='img' />
                    <div className='c-errorBox' >
                        <h1>404</h1>
                        <p>Not found</p>
                    </div>
                    <p className='c-errorText'>por favor cheque a url: <a href={'/'}>http://Anitory.com</a> </p>
                </FlexContainer>
            </FlexContainer>
        </Main>
    );
}

export default Error404;