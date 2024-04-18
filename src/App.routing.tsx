import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Login from "./pages/Login/Login.tsx";
import {TripsPage} from "./pages/TripsPage/TripsPage.tsx";
import {TripDetails} from "./components/TripDetails/TripDetails.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/dashboard/trips" element={<TripsPage/>}>
                <Route path="/dashboard/trips/:tripId" element={<TripDetails/>}></Route>
            </Route>
            {/*<Route path="/dashboard/messages"></Route>
            <Route path="/dashboard/settings"></Route>
            <Route path="/dashboard/logout"></Route>*/}
            <Route path="/login" element={<Login/>}/>
        </>
    ));

export default router;
