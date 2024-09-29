import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Content from "../Pages/Content";
import Content2 from "../Pages/Content2";
import Content3 from "../Pages/Content3";
import Content4 from "../Pages/Content4";
import Content5 from "../Pages/Content5";
import Content6 from "../Pages/Content6";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Content/>,
    },
    {
        path: "/Tuwaiq",
        element: <Content2/>,
      },
      {
        path: "/Al-Lawz",
        element: <Content3/>,
      },
      {
        path:"/Sarawat",
        element:<Content4/>
      },
      {
        path:"/Fifa",
        element:<Content5/>
      },
      {
        path:"/Al-Souda",
        element:<Content6/>
      }
  ]);
  function Router(){
   return <RouterProvider router={router} />

  }
export default Router;