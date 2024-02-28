import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
 
export function ReservationDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Reserver</Button>
     <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2 pt-4">
          <Typography variant="h5" color="blue-gray">      Reservation   </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
          Reserver Maintenant et obtenir votre ticket !          </Typography>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input label="Nom" />
          <Input type="email" label="Email" />
          <Input type="tel" label="Tèléphone" />

          <Button>Reserver</Button>
        </form>
      </Drawer>
    </React.Fragment>
  );
}