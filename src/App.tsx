import React from 'react';
import {PrototypeForm} from "./routes/PrototypeForm";
import {HomePage} from  "./routes/HomePage"
import {MapEditor} from "./routes/MapEditor";
import {Pathfinding} from "./routes/Pathfinding";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(([
      {
          path:"/",
          element: <PrototypeForm/>
      },
      {
          path:"/home",
          element: <HomePage/>
      },
      {
          path:"/pathfinding",
          element: <Pathfinding/>
      },
      {
          path:"/mapeditor",
          element: <MapEditor/>
      }
  ]))
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
