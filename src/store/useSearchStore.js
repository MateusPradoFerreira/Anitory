import create from "zustand";

const useSearchStore = create(
    (set) => ({
        currentSearch: '',
        setCurrentSearch: (currentSearch) => {
            if(currentSearch === '') {
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
        currentPage: 1,
        setCurrentPage: (currentPageID) => {
            window.scroll(0,0);
            set(() => ({
                currentPage: currentPageID
            }))
        },
        currentLimit: 24,
        setCurrentLimit: (currentLimit) => {
            set(() => ({
                currentLimit: currentLimit
            }))
        },
        currentPath: '/top/anime',
        setCurrentPath: (currentPath) => {
            set(() => ({
                currentPath: currentPath
            }))
        },
        currentAnimePath: '/videos',
        setCurrentAnimePath: (currentAnimePath) => {
            set(() => ({
                currentAnimePath: currentAnimePath
            }))
        }
    })
)

export default useSearchStore;