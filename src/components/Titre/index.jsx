import { Typography } from "@material-tailwind/react";

export function Title(props){
    return (
        <>
        <div className="mt-5 mb-4 ms-8 me-0 " >
        <Typography variant="h2" className="text-primary">
        {props.name}

        </Typography>
        <hr class="w-[75px] h-1  bg-primary border-0 rounded  " style={{marginTop:0,marginBottom:0}} />

        </div>
        </>
    );
}