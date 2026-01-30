import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "users/:id",
				element: <UserDetails />,
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);
