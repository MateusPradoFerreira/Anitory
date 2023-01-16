import create from "zustand";

const INITIAL_STATE = {
    currentSearch: '',
    currentPage: 1,
    currentLimit: 24,
    currentPath: '/top/anime',
    currentAnimePath: '/videos',
    currentMangaPath: '/characters',
}

const useSearchStore = create(
    (set) => ({
        ...INITIAL_STATE,
        setCurrentSearch: (currentSearch) => {
            if (currentSearch === '') {
                var path = '/top/anime'
            } else {
                var path = '/anime'
            }
            set(() => ({
                currentSearch: currentSearch,
                currentPath: path,
                currentPage: 1
            }))
        },
        setCurrentPage: (currentPageID) => {
            set(() => ({ currentPage: currentPageID }))
        },
        setCurrentLimit: (currentLimit) => {
            set(() => ({ currentLimit: currentLimit }))
        },
        setCurrentPath: (currentPath) => {
            set(() => ({ currentPath: currentPath }))
        },
        setCurrentAnimePath: (currentAnimePath) => {
            set(() => ({ currentAnimePath: currentAnimePath }))
        },
        setCurrentMangaPath: (currentMangaPath) => {
            set(() => ({ currentMangaPath: currentMangaPath }))
        },
        clear: () => {
            set(() => (INITIAL_STATE));
            sessionStorage.clear(); // or localStorage.clear();
        },
    })
)

export default useSearchStore;