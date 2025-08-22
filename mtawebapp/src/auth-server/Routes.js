import React, { Component, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import history from './History';
import App from "../App";

export default class Switches extends Component {
    render() {
        return (
            <Router history={history}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/#" element={''} />
                    <Route path="/#" element={''} />
                </Routes>
            </Router>
        )
    }
}