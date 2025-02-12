import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// const appRouter = (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<AppLayout />}>
//         <Route index element={<Body />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<Error/>} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Body /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(appRouter);

root.render(<RouterProvider router={appRouter} />);