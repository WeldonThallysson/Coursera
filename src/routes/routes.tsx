import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/home"; 
import BookingForm from "../components/BookingForm";




export const route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/reserve',
        element: <BookingForm/>
    }
])

 