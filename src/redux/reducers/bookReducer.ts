import { BookActionTypes, BookState, BookAction } from "../../types/book"

export const initialState: BookState = {
    book: {},
    loading: false,
    error: null
}

export const bookReducer = (state = initialState, action: BookAction): BookState => {
    switch(action.type) {
        case BookActionTypes.FETCH_BOOK : 
            return {book: {}, loading: false, error: null}
        case BookActionTypes.FETCH_BOOK_SUCCESS : 
            return {book: action.payload, loading: false, error: null}
        case BookActionTypes.FETCH_BOOK_ERROR : 
            return {loading: false, error: action.payload, book: {}}
        default : return state
    }
}