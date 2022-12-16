import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

function MoviesHeader() {
    return (
        <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 mb-24 px-5">
                <div className="flex flex-col flex-auto">
                    <Typography className="text-3xl font-semibold tracking-tight leading-8">
                        Movies
                    </Typography>
                    <Typography className="font-medium tracking-tight" color="text.secondary">
                        Management of films in the cinema
                    </Typography>
                </div>
                <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="info"
                        startIcon={<FuseSvgIcon size={20}>material-solid:add_comment</FuseSvgIcon>}
                    >
                        Add new movie
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MoviesHeader;
