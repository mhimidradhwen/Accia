import AboutSection from "../components/AboutSection";
import BookCard from "../components/BookCard";
import { FooterWithSocialLinks } from "../components/Footer";
import GalleryImageViewer from "../components/GalleryImageViewer";
import Hero from "../components/Hero";
import { HomeCarrousel } from "../components/HomeCarrousel";
import { NavbarWithMegaMenu } from "../components/Navbar";
import {PostCard } from "../components/PostCard";
import { Title } from "../components/Titre";
import EventDisplay from "./EventSection";

export function AllPosts(){
return (
    <>
  
    {/* <div className="p-9 pt-0 pb-0 mb-6">
        <Title name="tous Les Posts" />
        <PostCard/>
        <BookCard category="test" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloremque tenetur, ab dolore quam sequi ipsa fugit ullam quisquam reprehenderit, temporibus soluta dolorum ratione. Pariatur sint facilis veniam voluptatum dolore?
" offPrice="50" price="40" title="Titre de ss"/>
    </div> */}
        {/* <HomeCarrousel /> */}

    <Hero />
    
    <AboutSection />
    <HomeCarrousel />
    <GalleryImageViewer />
    <EventDisplay className="mx-9 p-7" />
    </>
)
}