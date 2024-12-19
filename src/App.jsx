import { useState } from "react";

import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Liked from "./Components/Liked/Liked";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

function App() {

    const [search, setSearch] = useState('');
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Header search={search} handleInputChange={handleInputChange} />,
                children: [
                    { path: "/", element: <Card filter={search} /> },
                    { path: "/liked", element: <Liked /> },
                    { path: "*", element: <h1>404 Page Not Found</h1> },
                ],
            },
        ],
        {
            future: {
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
                v7_startTransition: true,
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
            },
        }
    );
    
    return <RouterProvider router={router} />;
}



export default App;
