import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Fiji from "./Fiji";
import Bahamas from "./Bahamas";
import Turkscaicos from "./Turkscaicos";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Best Beaches in the World for 2024</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Fiji</NavLink></li>
                        <li><NavLink to="/bahamas">Bahamas</NavLink></li>
                        <li><NavLink to="/turksCaicos">Turks & Caicos</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Fiji />} />
                            <Route path="/bahamas" element={<Bahamas />} />
                            <Route path="/turkscaicos" element={<Turkscaicos />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
