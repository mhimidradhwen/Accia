import { FooterWithSocialLinks } from "../components/Footer";
import { NavbarWithMegaMenu } from "../components/Navbar";
import {PostCard } from "../components/PostCard";
import { Title } from "../components/Titre";

export function AllPosts(){
return (
    <>
  
    <div className="p-9 pt-0 pb-0 mb-6">
        <Title name="tous Les Posts" />
        <PostCard/>
    </div>

    </>
)
}