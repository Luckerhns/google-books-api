export interface BookState {
    book: {},
    loading: boolean
    error: null | string
}

export enum BookActionTypes {
    FETCH_BOOK = "FETCH_BOOK",
    FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS",
    FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR'
}

interface FetchBookAction {
    type: BookActionTypes.FETCH_BOOK
}

interface FetchBookSuccessAction {
    type: BookActionTypes.FETCH_BOOK_SUCCESS
    payload: any[]
}

interface FetchBookErrorAction {
    type: BookActionTypes.FETCH_BOOK_ERROR
    payload: string
}

export type BookAction = FetchBookAction | FetchBookErrorAction | FetchBookSuccessAction