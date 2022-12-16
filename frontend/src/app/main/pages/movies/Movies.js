import {alpha, styled} from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import {Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

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
    return { name, calories, fat, carbs, protein };
}
let numSelected = 10;
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozsen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice crseam sandwich', 237, 9.0, 37, 4.3),
];

function MoviesPage() {
    return (
        <div className="p-36">
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MoviesPage;
