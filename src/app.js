import React from "react"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
//new react router 6 changed how component is nested in the routes

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="/" element={<Photos />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}