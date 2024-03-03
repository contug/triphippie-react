import './App.css'
import {RouterProvider} from "react-router-dom";
import {Loader} from "./components/Loader/Loader.tsx";
import router from "./App.routing.tsx";

function App() {

    return (
        <>
            <Loader/>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
