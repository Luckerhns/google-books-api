import React, { useState } from "react";
import Body from "../Components/UI/Body";
import Header from "../Components/UI/Header";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/UI/Footer";
import BooksComponent from "../Components/BooksComponent";
import { useTypedSelector } from "../hooks/useTypedSelector";

const MainPage = () => {
    const [input, setInput] = useState("");
    const { books } = useTypedSelector((state) => state.books);
    const [currentBooks, setCurrentBooks] = useState([...books]);
    const [sorting, setSorting] = useState("");
    const [filter, setFilter] = useState("");

    return (
        <div>
            <Header />
            <Body>
                <SearchBar
                filter={filter}
                setFilter={setFilter}
                    sorting={sorting}
                    setSorting={setSorting}
                    input={input}
                    setInput={setInput}
                />
                <BooksComponent
                filter={filter}
                    sorting={sorting}
                    currentBooks={currentBooks}
                    setCurrentBooks={setCurrentBooks}
                    input={input}
                />
            </Body>
            <Footer />
        </div>
    );
};

export default MainPage;
