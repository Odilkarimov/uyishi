import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Card from "../components/Card";
import User from "../components/User";
import Call from "../components/Call";
import Comp from "../components/Comp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        ]
    },
    {
        path: "card",
        element: <Card />,
    },
    {
        path: "user",
        element: <User />,
    },
    {
        path: "call",
        element: <Call />,
    },
    {
        path: "comp",
        element: <Comp />
    }
])

export default router;