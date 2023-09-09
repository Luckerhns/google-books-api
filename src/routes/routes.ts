import { ComponentElement, ReactComponentElement, ReactNode } from "react";
import MainPage from "../pages/MainPage";
import Book from "../Components/Book";
import BookPage from "../pages/BookPage";

export interface IRoute {
    path: string;
    element: any;
}

enum PublicPaths {
    MAIN_PATH = "/main",
    BOOK_PATH = '/book/:id'
}

export const publicRoutes: IRoute[] = [
    { path: PublicPaths.MAIN_PATH, element: MainPage },
    { path: PublicPaths.BOOK_PATH, element: BookPage}
];
