function Main(props) {
    return (
        <main className={'l-main' + (props.compClass === undefined? '' : props.compClass)}>
            {props.children}
        </main>
    );
}

export default Main;