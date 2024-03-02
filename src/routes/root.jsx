import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div className="flex flex-col p-4 mx-auto">
        <Typography variant="h1">Liens</Typography>
        <ul>
            <li>
            <Link to="/posts"><Typography>posts</Typography></Link>

            </li>
            <li>
            <Link to="/events"><Typography>events</Typography></Link>

            </li>
        </ul>
         </div>
      </>
    );
  }