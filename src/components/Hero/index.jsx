import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-100">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl lg:pt-19 !leading-snug"
          >
            40% OFF
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            ACCIA{" "}
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            provident nulla praesentium. Aspernatur soluta quis odio quas nulla
            maxime minima?
          </Typography>
          <Button size="lg" className="bg-primary">
            s'inscrire
          </Button>
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6">
            <img
              width={768}
              height={768}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src="/image/books/Rectangle9.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src="/image/books/Rectangle10.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            <img
              width={768}
              height={768}
              src="/image/books/Rectangle12.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src="/image/books/Rectangle13.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src="/image/books/Rectangle14.svg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
