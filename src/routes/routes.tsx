import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import ReservationForm from "../components/ReservationForm";




export const route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/reserve',
        element: <ReservationForm/>
    }
])

 