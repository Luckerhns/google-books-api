import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import axios from "axios";

const BookPage = () => {
    const [bookItem, setBookItem] = useState([]);
    const { id } = useParams();
    const { book } = useTypedSelector((state) => state.book);
    const { fetchBooks } = useActions();

    
    useEffect(() => {
        const findBook = async () => {
            await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => setBookItem(res.data))
            console.log(id)
        };
        findBook()
    }, [])

    return <div></div>;
};

export default BookPage;
