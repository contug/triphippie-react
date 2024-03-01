import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home/Home.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Loader} from "./components/Loader/Loader.tsx";


const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/login', element: <Login/>},
])

function App() {

    return (
        <>
            <Loader/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
