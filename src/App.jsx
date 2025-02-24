import "./App.css";
import Layout from "./components/common/Layout";
import Welcome from "./pages/welcome/Welcome";
import Dashboard from "./pages/dashboard/Dashboard";
import NoPage from "./components/common/NoPage";
import "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Login from "./pages/userAction/Login";
import Logout from "./pages/userAction/Logout";
import Register from "./pages/userAction/Register";
import Documentation from "./pages/dashboard/Documentation.jsx";
import MultipleChoice from "./pages/dashboard/MultipleChoice.jsx";
import CodingChallenge from "./pages/dashboard/CodingChallenge.jsx";
import NoteCard from "./pages/dashboard/NoteCard.jsx";
import GoalsProgress from "./pages/dashboard/GoalsProgress.jsx";

//fonts
import '/fonts/TekturCondensed-Medium.ttf';
import '/fonts/TekturCondensed-Bold.ttf';


const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/documentation" element={<Documentation/>}/>
                    <Route path="/multiple-choice" element={<MultipleChoice/>}/>
                    <Route path="/coding-challenge" element={<CodingChallenge/>}/>
                    <Route path="/note-card" element={<NoteCard/>}/>
                    <Route path="/goals-progress" element={<GoalsProgress/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>


    );
};

export default App;
