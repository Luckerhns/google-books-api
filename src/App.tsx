import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Book from "./Components/Book";
import { IRoute, publicRoutes } from "./routes/routes";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((e: IRoute) => (
                    <Route key={e.path} path={e.path} element={<e.element/>} />
                ))}
                <Route path="*" element={<Navigate to={'/main'} />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
