import { Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MoviesHeader from "./components/MoviesHeader";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FuseLoading from '@fuse/core/FuseLoading';
import ConfirmationDeleteModal from "../../../shared/components/ConfirmationDeleteModal";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import MoviesDetailsModal from "./components/MoviesDetailsModal";
import { useEffect, useState } from "react";
import MovieService from "src/app/shared/services/movie-service";

function MoviesPage() {
    const navigate = useNavigate();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsloading(true);
        MovieService.getMovies().then((response) => {
            if (response) {
                setMovies(response?.data);
                setIsloading(false);
            }
        })
    }, []);

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true);
    };

    const handleOpenDetailsModal = () => {
        setOpenDetailsModal(true);
    };

    const handleEditMovies = () => {
        navigate("/settings/movies/create");
    };

    return (
        <div className="p-36">
            <MoviesHeader />
            {!isLoading ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Genre</b></TableCell>
                            <TableCell><b>Direction</b></TableCell>
                            <TableCell><b>Duration</b></TableCell>
                            <TableCell><b>Rating&nbsp;(IMDb)</b></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => (
                            <TableRow
                                key={movie?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="hover:bg-gray-100"
                            >
                                <TableCell component="th" scope="row">
                                    {movie?.name}
                                </TableCell>
                                <TableCell>{movie?.genre}</TableCell>
                                <TableCell>{movie?.direction}</TableCell>
                                <TableCell>{movie?.duration}</TableCell>
                                <TableCell>
                                    <Rating name="read-only" value={movie?.rating / 2} readOnly />
                                </TableCell>
                                <TableCell style={{ display: "flex", justifyContent: "right" }}>
                                    <Tooltip title="View" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-purple"
                                            onClick={handleOpenDetailsModal}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-solid:eye
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Edit" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-blue"
                                            onClick={handleEditMovies}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-solid:pencil-alt
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="hover:bg-red"
                                            onClick={handleOpenDeleteModal}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-solid:trash
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> : <FuseLoading />}
            {openDetailsModal && <MoviesDetailsModal open={openDetailsModal} setOpen={setOpenDetailsModal} />}
            {openDeleteModal && <ConfirmationDeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal}
                message={"Are you sure you want to delete the movie?"} />}
        </div>
    );
}

export default MoviesPage;
