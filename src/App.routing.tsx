import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";

const router = createBrowserRouter([
    {path: '/home', element: <Home/>},
    {path: '/login', element: <Login/>},
]);

export default router;
