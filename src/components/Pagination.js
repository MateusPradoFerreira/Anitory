import useSearchStore from "../store/useSearchStore";

function Pagination(props) {
    const setCurrentPage = useSearchStore((state) => state.setCurrentPage);
    const currentPage = useSearchStore((state) => state.currentPage);
    var Nbuttons = Math.ceil(props.totalCount / props.pageSize);
    const buttons = [];
    var i = 1;

    while (i <= Nbuttons) {

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
            setCurrentPage(currentPage + 1);
            window.scroll(0,0);
        }
    };

    function onPrevious() {
        if (props.currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scroll(0,0);
        }
    };

    function onFirst() {
        setCurrentPage(1);
        window.scroll(0,0);
    };

    function onLast() {
        setCurrentPage(props.lastPage);
        window.scroll(0,0);
    };

    return (
        <div className="c-pagination">
            <button className="c-pagination__BToff" onClick={onFirst}>{'<<'}</button>
            <button className="c-pagination__BToff" onClick={onPrevious}>{'<'}</button>
            {buttons.map((button) => (
                <button
                    style={{ display: button.display }}
                    key={button.index}
                    className={'c-pagination' + (button.currentPage === true ? '__BTon' : '__BToff')}
                    onClick={() =>{ setCurrentPage(button.index) ; window.scroll(0,0);}} >
                    {button.index < 10 ? '0' + button.index : button.index}
                </button>
            ))}
            <button className="c-pagination__BToff" onClick={onNext}>{'>'}</button>
            <button className="c-pagination__BToff" onClick={onLast}>{'>>'}</button>
        </div>
    );
}

export default Pagination;