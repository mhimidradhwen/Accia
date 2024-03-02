import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Modal from "../ReservationModal";

export function BookCard({ category, title, desc, price, offPrice }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
        <img
          src="data:image/png;base64,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"
          alt={title}
          className="h-full w-full scale-[1.1] object-cover object-center"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography color="blue" className="mb-2 text-xs !font-semibold">
          {category}
        </Typography>
        <a href="#">
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-3 font-bold normal-case xl:w-100"
          >
            {title}
          </Typography>
        </a>
        <Typography className="mb-4 font-normal !text-gray-500">
          {desc}
        </Typography>

        <div className="flex flex-col lg:flex-row justify-between pt-4 gap-4">
          <Button
            variant="outlined"
            className="flex items-center gap-3 text-primary "
          >
            Voir Plus
          </Button>
          {/* <ReservationDrawer /> */}
          <Modal />
        </div>
      </CardBody>
    </Card>
  );
}
export default BookCard;
