import { createBrowserRouter } from "react-router-dom"

// ---- components ----
import { Layout } from "../layout/layout";
import { Home } from "@pages/home/home.tsx";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])