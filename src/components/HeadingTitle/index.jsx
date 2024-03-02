import React from "react";
import {
  Navbar,
  Typography,
 
} from "@material-tailwind/react";


export function HeadingTitle({title}) {

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none mb-4 px-4 py-2 lg:px-8 lg:py-4">
    <Typography variant="h2" className="text-primary">
        {title}

        </Typography>
        <hr class="w-[75px] h-1  bg-primary border-0 rounded  " style={{marginTop:0,marginBottom:0}} />

    </Navbar>
  );
}