function FlexContainer(props) {
    return (
        <div style={{
            width: props.size,
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