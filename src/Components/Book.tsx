import React, { FunctionComponent, useState } from "react";
import { IBook } from "../types/type";
import styles from "../styles/Book.module.scss";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";

const Book: FunctionComponent<IBook> = ({ book, imageLink }) => {
    const [show, setShow] = useState<boolean>(false);
    const [bookItem, setBookItem] = useState();
    const { bookCreator } = useActions();
    const navigate = useNavigate();
    const id = book.id;

    return (
        <div className={styles.book__container} onClick={() => navigate(`/book/${id}`)}>
            <img alt="icon" src={imageLink} />
            <p className={styles.book__type}>{book.volumeInfo.categories}</p>
            <h3>{book.volumeInfo.title}</h3>
            <span className={styles.book__author}>
                {book.volumeInfo.authors}
            </span>
        </div>
    );
};

export default Book;
