import {Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import _ from "@lodash";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ConfirmationDeleteModal from "../../../shared/components/ConfirmationDeleteModal";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import TicketsHeader from "./components/TicketsHeader";

// const Root = styled(FusePageSimple)(({theme}) => ({
//     // '& .FusePageSimple-header': {
//     //     backgroundColor: theme.palette.background.paper,
//     //     borderBottomWidth: 1,
//     //     borderStyle: 'solid',
//     //     borderColor: theme.palette.divider,
//     // },
//     '& .FusePageSimple-toolbar': {},
//     '& .FusePageSimple-content': {},
//     '& .FusePageSimple-sidebarHeader': {},
//     '& .FusePageSimple-sidebarContent': {},
// }));
//
// function MoviesPage(props) {
//     return (
//         <Root
//             // header={
//             //     <div className="p-24">
//             //         <h4>{t('TITLE')}</h4>
//             //     </div>
//             // }
//             content={
//                 <div className="p-24">
//                     <h4>Movies</h4>
//                     <br/>
//                     <b>Coming soon.</b>
//                 </div>
//             }
//             scroll="content"
//         />
//     );
// }

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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className="p-36">
            <TicketsHeader/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>First and last name</b></TableCell>
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
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell style={{display: "flex", justifyContent: "right"}}>
                                    <Tooltip title="View" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-purple"
                                        >
                                            <FuseSvgIcon>
                                                heroicons-solid:eye
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
                                    <Tooltip title="Delete" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="hover:bg-red"
                                            onClick={handleClickOpen}
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
            </TableContainer>
            {open && <ConfirmationDeleteModal open={open} setOpen={setOpen}
                                              message={"Are you sure you want to delete the reservation?"}/>}
        </div>
    );
}

export default TicketsPage;
