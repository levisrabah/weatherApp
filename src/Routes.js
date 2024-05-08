// import any page to be rendered here 
import App from "./pages/App"
import ErrorPage from "./pages/ErrorPage"
import SavedLocations from "./pages/SavedLocations"
const routes = [
    {
        path: '/',
        element: <App />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/SavedLocations',
        element: <SavedLocations />,
        errorElement:<ErrorPage/>
    }
]  
export default routes