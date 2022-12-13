function Pagination(props) {
    var Nbuttons = Math.ceil(props.totalCount / props.pageSize);
    const buttons = [];
    var i = 1;

    while (i <= Nbuttons) {
        buttons.push(i);
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
        <div>
            <button onClick={onPrevious}>{'<'}</button>
            {buttons.map((index) => (
                <button onClick={() => props.onPageChange(false, props.search, index)}>{index}</button>
            ))}
            <button onClick={onNext}>{'>'}</button>
        </div>
    );
}

export default Pagination;