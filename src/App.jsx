
import { FooterWithSocialLinks } from "./components/Footer";
import { NavbarWithMegaMenu } from "./components/Navbar";
import { AllEventsPage } from "./pages/AllEventsPage";
import EventsPage from "./pages/EventsPage";
import { AllPosts } from "./pages/post-listing";

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
     <NavbarWithMegaMenu />
      <AllEventsPage />
  <FooterWithSocialLinks />
  </div>


    </>
  );
}

export default App;
