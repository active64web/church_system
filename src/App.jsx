import { RouterProvider } from "react-router-dom"
import routes from "./utils/routes"

function App() {
    return (
        <div className='App'>
            <RouterProvider router={routes} />
        </div>
    )
}

export default App
