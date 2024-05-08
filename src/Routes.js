// import any page to be rendered here 
import Weather from "./pages/Weather"
import ErrorPage from "./pages/ErrorPage"
import SavedLocations from "./pages/SavedLocations"
const routes = [
    {
        path: '/',
        element: <Weather />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/SavedLocations',
        element: <SavedLocations />,
        errorElement:<ErrorPage/>
    }
]  
export default routes