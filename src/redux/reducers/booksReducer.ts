import { BookState, BooksAction, BooksActionTypes } from "../../types/books";

const initialState: BookState = {
    books: [],
    loading: false,
    error: null,
};

export const booksReducer = (state = initialState, action: BooksAction): BookState => {
    switch (action.type) {
        case BooksActionTypes.FETCH_BOOKS:
            return { loading: true, error: null, books: [] };
        case BooksActionTypes.FETCH_BOOKS_ERROR:
            return { loading: false, error: action.payload, books: [] };
        case BooksActionTypes.FETCH_BOOKS_SUCCESS:
            return { loading: false, error: null, books: action.payload };
        default:
            return state;
    }
};
