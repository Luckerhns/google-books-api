import { useState } from "react";
import styles from "../styles/SearchBar.module.scss";
import { useActions } from "../hooks/useActions";
import loopIcon from "../assets/loop.png";
import { AxiosResponse } from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SearchBar = ({input, setInput, sorting, setSorting, filter, setFilter}: {input: any, setInput: any, sorting: any, setSorting: any, filter: any, setFilter: any}) => {
    const { fetchBooks } = useActions();

    let pagination = 30

    return (
        <div className={styles.search__container}>
            <h1>Search for books</h1>
            <div className={styles.input__container}>
                <input
                    className={styles.search__input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <img
                    onKeyPress={(e) => fetchBooks}
                    className={styles.find__button}
                    src={loopIcon}
                    onClick={(e) => {
                        fetchBooks(input, pagination, 0, sorting, filter);
                    }}
                ></img>
            </div>
            <div className={styles.search__filters}>
                <div className={styles.categories__container}>
                    <span>Categories</span>
                    <select value={filter} onChange={e => setFilter(e.target.value)} className={styles.categories__input}>
                        <option value='partial'>partial</option>
                        <option value="free-ebooks">free-ebooks</option>
                        <option value="paid-ebooks">paid-ebooks</option>
                        <option value="ebooks">ebooks</option>
                        <option value="full">full</option>
                    </select>
                </div>
                <div className={styles.sorting__container}>
                    <span>Sorting by</span>
                    <select value={sorting} onChange={e => setSorting(e.target.value)} className={styles.sorting__input}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
