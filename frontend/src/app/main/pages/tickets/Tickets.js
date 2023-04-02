import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import TicketsHeader from "./components/TicketsHeader";
import TicketsDetailsModal from "./components/TicketsDetailsModal";
import FuseLoading from "@fuse/core/FuseLoading";
import {useEffect, useState} from "react";
import TicketService from "src/app/shared/services/ticket-service";

function TicketsPage() {
    const [openTicketsDetailsModal, setOpenTicketsDetailsModal] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [ticketId, setTicketId] = useState();
    const [tempTickets, setTempTickets] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let pageSize = 10;
    let startIndex = (page - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    useEffect(() => {
        setIsloading(true);
        TicketService.getTickets().then((response) => {
            if (response) {
                setTickets(response?.data);
                setTempTickets(response?.data?.slice(startIndex, endIndex));
                setIsloading(false);
                setTotalPages(Math.ceil(response?.data?.length / pageSize));
            }
        })
    }, []);

    useEffect(() => {
        setTempTickets(tickets?.slice(startIndex, endIndex));
    }, [page]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    function handleShowDetailsModal(id) {
        setTicketId(id);
        setOpenFormModal(true);
    }

    function convertToDateTime(dateTime) {
        return new Date(dateTime).toLocaleString();
    }

    return (
        <div className="p-36">
            <TicketsHeader/>
            {!isLoading ? <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Full Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Movie</b></TableCell>
                            <TableCell><b>Number of tickets</b></TableCell>
                            <TableCell><b>Date of purchase</b></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempTickets?.length > 0 ? tempTickets?.map((ticket) => (
                            <TableRow
                                key={ticket?._id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                className="hover:bg-gray-100"
                            >
                                <TableCell component="th" scope="row">
                                    {ticket?.first_name + " " +ticket?.last_name}
                                </TableCell>
                                <TableCell>{ticket?.email}</TableCell>
                                <TableCell>{ticket?.movie?.name}</TableCell>
                                <TableCell>{ticket?.number_of_tickets}</TableCell>
                                <TableCell>
                                    {convertToDateTime(ticket?.createdAt)} <FuseSvgIcon className="text-48 inline-block text-green" size={16}
                                                             color="action">heroicons-outline:check-circle</FuseSvgIcon>
                                </TableCell>
                                <TableCell style={{display: "flex", justifyContent: "right"}}>
                                    <Tooltip title="See transaction" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-purple"
                                            onClick={() => handleShowDetailsModal(ticket?._id)}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-outline:shopping-cart
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        )) : <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        className="hover:bg-gray-100"
                    >
                        <TableCell colSpan={6} className="text-center" component="th" scope="row">
                            No tickets available
                        </TableCell></TableRow>}
                </TableBody>
                {tickets?.length > 10 && <TableFooter>
                    <TableRow>
                        <TableCell colSpan={6} className="text-center" component="th" scope="row">
                            <Pagination count={totalPages} page={page} onChange={handleChangePage}
                                        color="secondary"/>
                        </TableCell>
                    </TableRow>
                </TableFooter>}
            </Table>
        </TableContainer> : <FuseLoading/>}
        
            {openTicketsDetailsModal &&
                <TicketsDetailsModal open={openTicketsDetailsModal} setOpen={setOpenTicketsDetailsModal} id={ticketId}/>}
        </div>
    );
}

export default TicketsPage;
