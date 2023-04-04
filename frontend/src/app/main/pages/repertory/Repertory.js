import {
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow
} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ConfirmationDeleteModal from "../../../shared/components/ConfirmationDeleteModal";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import RepertoryHeader from "./components/RepertoryHeader";
import RepertoryFormModal from "./components/RepertoryFormModal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RepertoryService from "src/app/shared/services/repertory-service";
import { showMessage } from "app/store/fuse/messageSlice";
import { useDispatch } from 'react-redux';
import FuseLoading from "@fuse/core/FuseLoading";
import DateTimeHelper from "src/app/shared/helpers/DateTimeHelper";
import AvailableTicketsHelper from "src/app/shared/helpers/AvailableTicketsHelper";

function RepertoryPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openFormModal, setOpenFormModal] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [moviesFromRepertory, setMoviesFromRepertory] = useState([]);
    const [repertoryId, setRepertoryId] = useState();
    const [tempMoviesFromRepertory, setTempMoviesFromRepertory] = useState([]);
    const [movieFromRepertoryToDelete, setMovieFromRepertoryToDelete] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let pageSize = 10;
    let startIndex = (page - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    useEffect(() => {
        setIsloading(true);
        RepertoryService.getMoviesFromRepertory().then((response) => {
            if (response) {
                setMoviesFromRepertory(response?.data);
                setTempMoviesFromRepertory(response?.data?.slice(startIndex, endIndex));
                setIsloading(false);
                setTotalPages(Math.ceil(response?.data?.length / pageSize));
            }
        })
    }, [trigger]);

    useEffect(() => {
        setTempMoviesFromRepertory(moviesFromRepertory?.slice(startIndex, endIndex));
    }, [page]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    function handleOpenDeleteModal(repertory) {
        setMovieFromRepertoryToDelete(repertory);
        setOpenDeleteModal(true);
    }

    function handleOpenFormModal(id) {
        setRepertoryId(id);
        setOpenFormModal(true);
    }

    function handleOpenSeatReservations(repertory) {
        navigate("/settings/repertory/reservations/" + repertory?._id);
    }

    const handleDelete = () => {
        RepertoryService.deleteMovieFromRepertory(movieFromRepertoryToDelete?._id).then((response) => {
            if (response) {
                setOpenDeleteModal(false);
                dispatch(showMessage({ message: "Successfully deleted!" }));
                setTrigger(!trigger);
                setPage(1);
            }
        })
    }

    return (
        <div className="p-36">
            <RepertoryHeader />
            {!isLoading ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Movie</b></TableCell>
                            <TableCell><b>Price</b></TableCell>
                            <TableCell><b>Date and time</b></TableCell>
                            <TableCell><b>Tickets left</b></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempMoviesFromRepertory?.length > 0 ? tempMoviesFromRepertory?.map((repertory) => (
                            <TableRow
                                key={repertory?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="hover:bg-gray-100"
                            >
                                <TableCell component="th" scope="row">
                                    {repertory?.movie?.name}
                                </TableCell>
                                <TableCell>{repertory?.price}&nbsp;&euro;</TableCell>
                                <TableCell>{DateTimeHelper.convertToLocalFormat(repertory?.dateTime)}</TableCell>
                                <TableCell>
                                    {AvailableTicketsHelper.setAvailable(repertory?.number_of_tickets)}
                                </TableCell>
                                <TableCell style={{ display: "flex", justifyContent: "right" }}>
                                    <Tooltip title="View" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-purple"
                                            onClick={() => handleOpenSeatReservations(repertory)}
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
                                            onClick={() => handleOpenFormModal(repertory?._id)}
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
                                            onClick={() => handleOpenDeleteModal(repertory)}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-solid:trash
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        )) : <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className="hover:bg-gray-100"
                        >
                            <TableCell colSpan={6} className="text-center" component="th" scope="row">
                                No movies in repertory available
                            </TableCell></TableRow>}
                    </TableBody>
                    {moviesFromRepertory?.length > 10 && <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6} className="text-center" component="th" scope="row">
                                <Pagination count={totalPages} page={page} onChange={handleChangePage}
                                    color="secondary" />
                            </TableCell>
                        </TableRow>
                    </TableFooter>}
                </Table>
            </TableContainer> : <FuseLoading />}

            {openFormModal && <RepertoryFormModal open={openFormModal} setOpen={setOpenFormModal} id={repertoryId} />}
            {openDeleteModal && <ConfirmationDeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal}
                message={"Are you sure you want to delete the movie from repertory?"}
                onConfirm={handleDelete} />}
        </div>
    );
}

export default RepertoryPage;
