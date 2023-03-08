import type { RouteObject } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import SignUpPage from "./pages/signup/SignUpPage"
import TodoPage from "./pages/todo/TodoPage"



const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
        children: []
    },
    {
        path: "/login",
        element: <LoginPage />,
        children: []
    },
    {
        path: "/signup",
        element: <SignUpPage />,
        children: []
    }, {
        path: "/todo",
        element: <TodoPage />,
        children: []
    }
   

]

export default routes