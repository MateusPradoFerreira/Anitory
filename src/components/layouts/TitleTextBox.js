function TitleTextBox({title, text}) {
    return (
        <>
            <h2 className='c-title__subTitle'>{title}</h2>
            <p className='c-text__sinopse'>{text}</p>
        </>
    );
}

export default TitleTextBox;