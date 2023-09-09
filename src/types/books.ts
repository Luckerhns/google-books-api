export interface BookState {
    books: any[];
    loading: boolean;
    error: null | string,
}

export enum BooksActionTypes {
    FETCH_BOOKS = "FETCH_BOOKS",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR'
}

interface FetchBooksAction {
    type: BooksActionTypes.FETCH_BOOKS
}

interface FetchBooksSuccessAction {
    type: BooksActionTypes.FETCH_BOOKS_SUCCESS
    payload: any[]
}

interface FetchBooksErrorAction {
    type: BooksActionTypes.FETCH_BOOKS_ERROR
    payload: string
}

export type BooksAction = FetchBooksAction | FetchBooksErrorAction | FetchBooksSuccessAction