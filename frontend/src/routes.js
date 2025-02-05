import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import TeenDriving from "./pages/TeenDriving";
import Classroom from "./pages/Classroom";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "teen-driving", element: <TeenDriving /> },
            { path: "classroom", element: <Classroom /> },
            { path: "location", element: <Location /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
