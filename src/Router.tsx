import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "ku",
                element: <Home />,
            },
        ],
    },
]);

export default router;
