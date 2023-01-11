import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import Xcape from "./components/Xcape";
import Merchant from "./routes/Merchant";
import Rooms from "./routes/Rooms";

const merchantChildren = [
    {
        path: "xcape",
        element: <Xcape />,
    },
    {
        path: "rooms",
        element: <Rooms />,
    },
    {
        path: "reservation",
        element: <Reservation />,
    },
    {
        path: "review",
        element: <Review />,
    },
    {
        path: "event",
        element: <Event />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/:merchant",
        element: <Merchant />,
        children: merchantChildren,
    },
]);

export default router;
