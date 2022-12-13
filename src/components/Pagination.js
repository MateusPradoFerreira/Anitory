function Pagination(props) {
    var Nbuttons = Math.ceil(props.totalCount / props.pageSize);
    const buttons = [];
    var i = 1;

    while (i <= Nbuttons) {

        var visibility = props.siblingCount * 2 + 1;

        if (i >= props.currentPage - props.siblingCount && i <= props.currentPage + props.siblingCount) {
            var display = ''
        } else {
            var display = 'none'
        }

        buttons.push({
            index: i,
            display: display,
            currentPage: props.currentPage === i ? true : false
        });
        i++;
    }

    function onNext() {
        if (props.currentPage < Nbuttons) {
            props.onPageChange(false, props.search, props.currentPage + 1);
        }
    };

    function onPrevious() {
        if (props.currentPage > Nbuttons) {
            props.onPageChange(false, props.search, props.currentPage - 1);
        }
    };

    return (
        <div className="c-pagination">
            <button className="c-pagination__BToff" onClick={onPrevious}>{'<'}</button>
            {buttons.map((button) => (
                <button
                    style={{ display: button.display }}
                    key={button.index}
                    className={'c-pagination' + (button.currentPage === true ? '__BTon' : '__BToff')}
                    onClick={() => props.onPageChange(false, props.search, button.index)} >
                    {button.index}
                </button>
            ))}
            <button className="c-pagination__BToff" onClick={onNext}>{'>'}</button>
        </div>
    );
}

export default Pagination;