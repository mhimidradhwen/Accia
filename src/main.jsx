import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllPosts } from "./pages/post-listing";
import Root from "./routes/root.jsx";
import { AllEventsPage } from "./pages/AllEventsPage.jsx";
import { FooterWithSocialLinks } from "./components/Footer/index.jsx";
import { NavbarWithMegaMenu } from "./components/Navbar/index.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import Footer from "./components/NewFooter/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/posts",
    element: <AllPosts />,
  },
  {
    path: "/events",
    element: <AllEventsPage />,
  },
  {
    path: "/events/singleevent",
    element: <EventsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavbarWithMegaMenu />
      <RouterProvider router={router} />
      {/* <FooterWithSocialLinks /> */}
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
