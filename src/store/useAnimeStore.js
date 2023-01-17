import create from "zustand";

const INITIAL_STATE = {
    search: '',
    currentPage: 1,
    searchPath: '/top/anime',
    individualPath: '/videos',
}

const useAnimeStore = create(
    (set) => ({
        ...INITIAL_STATE,
        setSearch: (search) => {
            if (search === '') { var path = '/top/anime' }
            else { var path = '/anime' }
            set(() => ({
                search: search,
                searchPath: path,
                currentPage: 1,
            }))
        },
        setCurrentPage: (currentPageID) => {
            set(() => ({ currentPage: currentPageID }))
        },
        setSearchPath: (searchPath) => {
            set(() => ({ searchPath: searchPath }))
        },
        setIndividualPath: (individualPath) => {
            set(() => ({ individualPath: individualPath }))
        },
        clear: () => {
            set(() => (INITIAL_STATE));
            sessionStorage.clear(); // or localStorage.clear();
        },
    })
)

export default useAnimeStore;