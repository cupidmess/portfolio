import { useState } from "react";
import PartA from "./components/PartA";
import PartB from "./components/PartB";
import LandingPage from "./components/LandingPage";
import backgroundImage from './components/image.png';
import './index.css'; // Adjust path if necessary
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/click",
    element: <PartB/>,
  },
 
]);
function App (){
  return (
    <div>
   <RouterProvider router={router} />
   
    </div>
  );
};

export default App;