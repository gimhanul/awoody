import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import WeeklyPosition from "./pages/WeeklyPosition/WeeklyPosition";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import {createContext, useMemo, useState} from "react";
import TeacherPosition from "./pages/TeacherPosition/TeacherPosition";
import TeacherPositionDetail from "./pages/TeacherPositionDetail/TeacherPositionDetail";


export const UserContext = createContext({});

function App() {

    const [user, setUser] = useState({});
    const userValue = useMemo(() => ({user, setUser}), [user]);

    return (
        <>
            <UserContext.Provider value={userValue}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/position" element={<WeeklyPosition/>}/>
                        <Route path="/teacher" element={<TeacherPosition/>}/>
                        <Route path="/teacher/position" element={<TeacherPositionDetail/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;
