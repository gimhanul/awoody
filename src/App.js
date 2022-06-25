import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import WeeklyPosition from "./pages/WeeklyPosition/WeeklyPosition";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/position" element={<WeeklyPosition/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
