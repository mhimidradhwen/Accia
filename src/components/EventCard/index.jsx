import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";

import { ReservationDrawer } from "../ReservationDrawer";
import {  } from "@heroicons/react/solid";
export function EventCard({ title, description, date, hour }) {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="lead" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="p" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex  flex-col justify-between">
        <div className="flex items-center justify-between  pb-4">
          <Typography  className="font-normal">{hour}</Typography>
          <Typography className="font-normal">{date}</Typography>
        </div>
        <div className="flex  flex-row justify-between">
          <Button variant="outlined" className="flex items-center gap-3 text-primary ">
          <FaEye size="20" />
            Voir Plus

          </Button>
          <ReservationDrawer />
        </div>
      </CardFooter>
    </Card>
  );
}
