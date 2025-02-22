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
import store from "./state_management/store/store";
//fonts
import '/fonts/TekturCondensed-Medium.ttf';
import '/fonts/TekturCondensed-Bold.ttf';
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>

    );
};

export default App;
