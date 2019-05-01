export default {
    SET_BOOKLIST(state, bookList) {
        state.bookList = bookList;
    },
    SET_BOOKDETAIL(state, bookDetail) {
        state.bookDetail = bookDetail;
    },
    SET_IMAGE(state, image) {
        state.image = image;
    },
    INIT_BOOKINFO(state) {
        state.bookDetail = {};
        state.image = new Blob();
    },
    DELETE_BOOKINFO(state, idx) {
        state.bookList.forEach((el, arrIdx) => {
            if (el.idx === idx) {
                state.bookList.splice(arrIdx);
            }
        })
    },
    REFRESH_BOOKINFO(state, bookDetail) {
        state.bookList.push(bookDetail);
    }
}