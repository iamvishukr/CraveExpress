import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const AppLayout = () => {

    const [userName, setUserName] = useState();
    useEffect(() =>{
        const data ={
            name: "Vishal",
        };
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore()}>
            <div className="app">
                <UserContext.Provider value={{loggedIn: userName}}>  
                    <Header />
                    <Outlet />
                </UserContext.Provider>
            </div>
       </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [

            {
                path: '/',
                element: <Body/>,
            
            },
            {
                path: '/about',
                element: <About/>,
            
            },
            {
                path: '/contact',
                element: <Contact/>,
                
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>,
                
            },
            {
                path: '/cart',
                element: <Cart/>,
                
            },
        ],
        errorElement: <Error />
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);