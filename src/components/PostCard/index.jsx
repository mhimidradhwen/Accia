import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { Title } from "../Titre";
export function PostCard() {
  return (
    <>
    
      <div className="flex flex-col items-start justify-between  container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 " >
          <div className="card">
            <Card shadow="true" className="w-full max-w-[26rem] shadow-gray-500 shadow-2xl  ">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <IconButton
                  size="sm"
                  color="red"
                  variant="text"
                  className="!absolute top-4 right-4 rounded-full"
                >
                </IconButton>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex flex-row items-center justify-start">
                  <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                  <Typography variant="h5" color="blue-gray" className="mt-1 ms-3">
                    ACCIA
                  </Typography>
                </div>
                <div className="ms-4 pb-2 ">
                  <Typography variant="h5" className="font-light text-sm text-slate-500 ms-4 ">
                    il y a deux jours
                  </Typography></div>
                <hr />
                <Typography color="gray">
                  Lorem ipsum dolor sit, amet consectetur  elit. reicumque harum est explicabo
                </Typography>
              </CardBody>
              <CardFooter className="pt-3 ">
                <Button size="lg" color="primary" className="bg-primary" fullWidth={true}>
                  Voir Plus
                </Button>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>
    </>

  );
}