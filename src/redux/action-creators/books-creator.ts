import { Dispatch } from "redux";
import { BooksAction, BooksActionTypes } from "../../types/books";
import axios from "axios";
import { FC } from "react";

interface IfetchBooks {
    event: any,
    search: string
}

export const fetchBooks = (search: string, pagination: number, count: number, sorting: string, filter: string, e?: any) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        try {
            dispatch({ type: BooksActionTypes.FETCH_BOOKS });
            console.log(e)
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&startIndex=${count}${sorting ? `&orderBy=${sorting}` : ''}&maxResults=${pagination}${filter ? `&filter=${filter}` : ''}`
            )
            setTimeout(() => {
                dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data.items})
            })
        } catch (error) {
            dispatch({
                type: BooksActionTypes.FETCH_BOOKS_ERROR,
                payload: "Произошла ошибка при поиске книг",
            });
        }
    };
};
