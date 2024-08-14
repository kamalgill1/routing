import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Componants/Home.jsx";
import About from "./Componants/About.jsx";
import Contact from "./Componants/Contact.jsx";
// import Footer from './Componants/Footer.jsx'
// import Header from './Componants/Header.jsx'
import User from "./Componants/User.jsx";
import Github, { githubInfoLoader } from "./Componants/Github.jsx";
import Login from "./Componants/Login.jsx";
import Error404 from "./Componants/Error404.jsx";
import Prop from "./Componants/Prop.jsx";
// import Login from './Componants/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="Login" element={<Login />} />
      <Route path="error" element={<Error404 />} />
      <Route path="prop" element={<Prop />} />
      {/* <Route path="Get" element={<Get />} /> */}
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Login/> */}
  </React.StrictMode>
);
