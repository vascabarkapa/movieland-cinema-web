import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {useNavigate} from "react-router-dom";

function MoviesHeader() {
    const navigate = useNavigate();

    const handleAddMovies = () => {
        navigate("/settings/movies/create");
    };

    return (
        <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto items-center sm:items-center min-w-0 mb-24 px-5">
                <div className="flex flex-col flex-auto">
                    <Typography className="text-3xl text-center sm:text-left font-semibold tracking-tight leading-8">
                        Movies
                    </Typography>
                    <Typography className="font-medium tracking-tight text-center sm:text-left" color="text.secondary">
                        Management of films in the cinema
                    </Typography>
                </div>
                <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        startIcon={<FuseSvgIcon size={20}>material-solid:add_comment</FuseSvgIcon>}
                        onClick={handleAddMovies}
                    >
                        Add new movie
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MoviesHeader;
