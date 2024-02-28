
import { FooterWithSocialLinks } from "./components/Footer";
import { NavbarWithMegaMenu } from "./components/Navbar";
import EventsPage from "./pages/EventsPage";
import { AllPosts } from "./pages/post-listing";

function App() {
  return (
    <>
     <NavbarWithMegaMenu />
      <EventsPage />
  <FooterWithSocialLinks />


    </>
  );
}

export default App;
