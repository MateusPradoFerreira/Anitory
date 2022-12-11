function FlexContainer(props) {
    return (
        <div style={{
            maxWidth: props.size,
            width: '100%',
            minHeight: props.height,
            display: props.display,
            justifyContent: props.justify,
            flexWrap: props.wrap,
            gap: props.gap,
            flexDirection: props.flexDirection
        }}>
            {props.children}
        </div>
    );
}

export default FlexContainer;