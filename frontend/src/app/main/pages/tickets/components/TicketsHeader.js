import {Typography} from "@mui/material";

function TicketsHeader() {
    return (
        <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto items-center sm:items-center min-w-0 mb-24 px-5">
                <div className="flex flex-col flex-auto">
                    <Typography className="text-3xl text-center sm:text-left font-semibold tracking-tight leading-8">
                        Tickets
                    </Typography>
                    <Typography className="font-medium tracking-tight text-center sm:text-left" color="text.secondary">
                        Customers who purchased movie tickets online
                    </Typography>
                </div>
                {/*<div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">*/}
                {/*    <Button*/}
                {/*        className="whitespace-nowrap"*/}
                {/*        variant="contained"*/}
                {/*        color="secondary"*/}
                {/*        startIcon={<FuseSvgIcon size={20}>material-solid:add_comment</FuseSvgIcon>}*/}
                {/*    >*/}
                {/*        Add new movie*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default TicketsHeader;
