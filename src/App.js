
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
