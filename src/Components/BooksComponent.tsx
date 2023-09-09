import { BounceLoader } from "react-spinners";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from "../styles/BooksComponent.module.scss";
import Book from "./Book";
import { useEffect, useState } from "react";
import axios from "axios";

let pagination = 30;
let page = 1;
const BooksComponent = ({ input, currentBooks, setCurrentBooks, sorting, filter }: { input: any, currentBooks: any, setCurrentBooks: any, sorting: any, filter: any }) => {
    const [currentPage, setCurrentPage] = useState(3)
    let { books, loading } = useTypedSelector((state) => state.books);
    const [newBooks, setNewBooks] = useState([]);
    const { fetchBooks } = useActions();
    const res = books.length;
    
    useEffect(() => {
        setCurrentBooks([...books]);
    }, [books]);

    useEffect(() => {
        setCurrentBooks([...currentBooks, ...newBooks])
    }, [newBooks])
    
    const getBooks = async () => {
        await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${input}${sorting ? `&orderBy=${sorting}` : ''}&key=${
                process.env.REACT_APP_API_KEY
            }&startIndex=${pagination * currentPage}&maxResults=${pagination}${filter ? `&filter=${filter}` : ''}`
            ).then(res => {
                setNewBooks(res.data.items)
                // pagination += 30
                setCurrentPage(prev => prev + 1)
            })
            // page += 1
            console.log(currentPage * pagination)
        console.log(input);
    };

    console.log(books);

    return loading ? (
        <div className={`${styles.books__container} ${styles.loader}`}>
            <BounceLoader />
        </div>
    ) : (
        <div className={styles.books__container}>
            <h2 className={styles.result__count}>Found {currentBooks.length ? (currentPage - 2) * pagination : 0}</h2>
            <div className={styles.books}>
                {currentBooks.map((item:any, i:number) => {
                    let imageLink =
                        item.volumeInfo.imageLinks &&
                        item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;

                    if (imageLink != undefined)
                        return (
                            <span key={item.id}>
                                <Book book={item} imageLink={imageLink} />
                            </span>
                        );
                })}
            </div>
            {books.length > 0 ? (
                <div className={styles.load__more}>
                    <span onClick={(e) => getBooks()}>Load more...</span>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default BooksComponent;
