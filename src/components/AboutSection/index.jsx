"use client";

import React from "react";
// import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import CategoryCard from "../category_card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Fiction Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "School Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Non-fiction Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "SF & Fantasy Books",
    desc: "up to 40% OFF",
  },
];

export function AboutSection() {
  return (

    <section className="  w-full h-full px-8 pb-20 pt-20 lg:pt-0 bg-blue-50 m-5">
      <div className="mb-5 grid place-items-center text-center lg:text-start lg:place-items-start">
        <Typography variant="h2" className="text-primary mt-5">
A Propos ACCIA        </Typography>
      
      </div>
      <div className="flex lg:flex-row flex-col gap-6 ">
        <Typography>
          Lorem, ipsum dolor Lorem ipsu Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam quos, voluptate obcaecati explicabo enim
          hic. Cumque animi perferendis, impedit ut aliquid expedita sed
          praesentium unde maxime minus saepe, facere magnam! m dolor sit, amet
          consectetur adipisicing elit. Aspernatur impedit unde libero non. Vel
          corrupti iusto magnam, excepturi rerum asperiores, velit numquam
          suscipit autem veniam dolores dolor nihil sed unde. sit amet
          consectetur adipisicing elit. Vero quas officia vel hic cum nulla ex
          explicabo fugit earum assumenda a ea saepe, iure minus. Sit doloremque
          illum esse doloribus!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore alias quasi rem autem quo iusto, harum assumenda est, architecto quaerat commodi doloribus, maiores quibusdam quam dolorem saepe quia eos impedit.
        </Typography>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="ffff"
            className="lg:h-96 lg:w-96 lg:rounded-full rounded-lg object-cover object-center"
            />
      </div>
    </section>
  );
}

export default AboutSection;
