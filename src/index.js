import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './contextProvider/ContextProvider';

//imports pages
import FirstPage from './routes/FirstPage';
import SecondPage from './routes/SecondPage';
import App from './App';
import ProtectorRoute from './routes/routesPriv/ProtectorRoute';
import ThirdPagePriv from './routes/routesPriv/ThirdPagePriv';

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
},
{
path:"/first",
element:<FirstPage/>
},
{
  path:"/second",
  element:<SecondPage/>
  },
  {
    path:"/",
    element:<ProtectorRoute/>,
    children:[ {
      path:"/third",
      element:<ThirdPagePriv/>
      }
    ]
  }
 
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
          <RouterProvider router={router}/>
      </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
