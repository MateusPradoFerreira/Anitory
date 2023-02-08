import useMangaStore from "../../../store/useMangaStore";
import { PaginationButton, PaginationContainer } from "./Pagination.styles";


function Pagination({ css, totalCount, pageSize, siblingCount, lastPage }) {
    const setCurrentPage = useMangaStore((state) => state.setCurrentPage);
    const currentPage = useMangaStore((state) => state.currentPage);
    var Nbuttons = Math.ceil(totalCount / pageSize);
    const buttons = [];
    var i = 1;

    while (i <= Nbuttons) {

        if (i >= currentPage - siblingCount && i <= currentPage + siblingCount) {
            var display = ''
        } else {
            var display = 'none'
        }

        buttons.push({
            index: i,
            display: display,
            currentPage: currentPage === i ? true : false
        });
        i++;
    }

    function onNext() {
        if (currentPage < Nbuttons) {
            setCurrentPage(currentPage + 1);
            window.scroll(0, 0);
        }
    };

    function onPrevious() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scroll(0, 0);
        }
    };

    function onFirst() {
        setCurrentPage(1);
        window.scroll(0, 0);
    };

    function onLast() {
        setCurrentPage(lastPage);
        window.scroll(0, 0);
    };

    return (
        <PaginationContainer css={{ ...css }}>
            <PaginationButton off className="c-pagination__BToff" onClick={onFirst}>{'<<'}</PaginationButton>
            <PaginationButton off className="c-pagination__BToff" onClick={onPrevious}>{'<'}</PaginationButton>
            {buttons.map((button) => (
                <PaginationButton
                    css={{ display: button.display }}
                    key={button.index}
                    off={!button.currentPage === true}
                    onClick={() => { setCurrentPage(button.index); window.scroll(0, 0); }} >
                    {button.index < 10 ? '0' + button.index : button.index}
                </PaginationButton>
            ))}
            <PaginationButton off onClick={onNext}>{'>'}</PaginationButton>
            <PaginationButton off onClick={onLast}>{'>>'}</PaginationButton>
        </PaginationContainer>
    );
}

export default Pagination;