// import any page to be rendered here 
import App from "./pages/App"
import ErrorPage from "./pages/ErrorPage"
import SavedLocations from "./pages/SavedLocations"
import Forecast from "./pages/Forecast";
import AirPollution from "./pages/AirPollution";
const routes = [
    {
        path: '/',
        element: <App />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/Forecast',
        element: <Forecast />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/SavedLocations',
        element: <SavedLocations />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/AirPollution',
        element: <AirPollution />,
        errorElement:<ErrorPage/>
    }


]  
export default routes