import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*<Route path="/" element={<Main/>}/>*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
