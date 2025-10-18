import { RouterProvider } from "react-router-dom"
import routes from "./utils/Routes"

function App() {
    return (
        <div className='App'>
            <RouterProvider router={routes} />
        </div>
    )
}

export default App
