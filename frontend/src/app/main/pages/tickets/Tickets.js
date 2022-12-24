import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import TicketsHeader from "./components/TicketsHeader";
import TicketsDetailsModal from "./components/TicketsDetailsModal";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('The Big Short', 'asdsadsdsadsad', 'asdsadsdsadsad', 'asdsadsdsadsad', 'asdsadsdsadsad'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function TicketsPage() {
    const [openTicketsDetailsModal, setOpenTicketsDetailsModal] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleTicketsDetailsModalOpen = () => {
        setOpenTicketsDetailsModal(true);
    };

    return (
        <div className="p-36">
            <TicketsHeader/>
            <TableContainer component={Paper}>
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                className="hover:bg-gray-100"
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>
                                    {row.carbs} <FuseSvgIcon className="text-48 inline-block text-green" size={16}
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
                                            onClick={handleTicketsDetailsModalOpen}
                                        >
                                            <FuseSvgIcon>
                                                heroicons-outline:shopping-cart
                                            </FuseSvgIcon>
                                        </Button>
                                    </Tooltip>
                                    {/*<Tooltip title="Edit" placement="top">*/}
                                    {/*    <Button*/}
                                    {/*        variant="contained"*/}
                                    {/*        color="primary"*/}
                                    {/*        type="button"*/}
                                    {/*        size="small"*/}
                                    {/*        className="mr-5 hover:bg-blue"*/}
                                    {/*    >*/}
                                    {/*        <FuseSvgIcon>*/}
                                    {/*            heroicons-solid:pencil-alt*/}
                                    {/*        </FuseSvgIcon>*/}
                                    {/*    </Button>*/}
                                    {/*</Tooltip>*/}
                                    {/*<Tooltip title="Delete" placement="top">*/}
                                    {/*    <Button*/}
                                    {/*        variant="contained"*/}
                                    {/*        color="primary"*/}
                                    {/*        type="button"*/}
                                    {/*        size="small"*/}
                                    {/*        className="hover:bg-red"*/}
                                    {/*        onClick={handleClickOpen}*/}
                                    {/*    >*/}
                                    {/*        <FuseSvgIcon>*/}
                                    {/*            heroicons-solid:trash*/}
                                    {/*        </FuseSvgIcon>*/}
                                    {/*    </Button>*/}
                                    {/*</Tooltip>*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {openTicketsDetailsModal &&
                <TicketsDetailsModal open={openTicketsDetailsModal} setOpen={setOpenTicketsDetailsModal}/>}
            {/*{open && <ConfirmationDeleteModal open={open} setOpen={setOpen}*/}
            {/*                                  message={"Are you sure you want to delete the reservation?"}/>}*/}
        </div>
    );
}

export default TicketsPage;
