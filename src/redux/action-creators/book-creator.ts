import { Dispatch } from "react";
import { BookAction, BookActionTypes } from "../../types/book";

export const bookCreator = ({ book }: { book: any}) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            dispatch({ type: BookActionTypes.FETCH_BOOK });
            setTimeout(() => {
                dispatch({
                    type: BookActionTypes.FETCH_BOOK_SUCCESS,
                    payload: book,
                });
            });
        } catch (error) {
            dispatch({
                type: BookActionTypes.FETCH_BOOK_ERROR,
                payload: "Ошибка при загрузке книги",
            });
        }
    };
};
