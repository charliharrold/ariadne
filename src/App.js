
import React from "react";
import "./App.css";
import {
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./pages/navbar";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </HashRouter>


    );
}

export default App;
