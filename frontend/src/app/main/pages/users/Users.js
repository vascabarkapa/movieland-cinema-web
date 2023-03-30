import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import ConfirmationDeleteModal from "../../../shared/components/ConfirmationDeleteModal";
import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import UsersHeader from "./components/UsersHeader";
import { useNavigate } from "react-router-dom";
import UsersDetailsModal from "./components/UsersDetailsModal";
import { showMessage } from "app/store/fuse/messageSlice";
import { useDispatch } from 'react-redux';
import UserService from "src/app/shared/services/user-service";
import FuseLoading from "@fuse/core/FuseLoading";

function UsersPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [users, setUsers] = useState([]);
    const [tempUsers, setTempUsers] = useState([]);
    const [userToDelete, setUserToDelete] = useState({});
    const [userToShow, setUserToShow] = useState({});
    const [trigger, setTrigger] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let pageSize = 10;
    let startIndex = (page - 1) * pageSize;
    let endIndex = startIndex + pageSize;


    useEffect(() => {
        setIsloading(true);
        UserService.getUsers().then((response) => {
            if (response) {
                setUsers(response?.data);
                setTempUsers(response?.data)?.slice(startIndex, endIndex);
                setIsloading(false);
                setTotalPages(Math.ceil(response?.data?.length / pageSize));
            }
        })
    }, [trigger]);

    useEffect(() => {
        setTempUsers(users?.slice(startIndex, endIndex));
    }, [page]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    function handleOpenDeleteModal(user) {
        setUserToDelete(user);
        setOpenDeleteModal(true);
    };

    function handleOpenDetailsModal(user) {
        setUserToShow(user);
        setOpenDetailsModal(true);
    };

    function handleEditUser(id) {
        navigate("/settings/users/edit/" + id);
    };

    const handleDelete = () => {
        UserService.deleteUser(userToDelete?._id).then((response) => {
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
            <UsersHeader />
            {!isLoading ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Username</b></TableCell>
                            <TableCell><b>Full Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempUsers?.length > 0 ? tempUsers.map((user) => (
                            <TableRow
                                key={user?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="hover:bg-gray-100"
                            >
                                <TableCell component="th" scope="row">
                                    {user?.username}
                                </TableCell>
                                <TableCell>{user?.first_name + " " + user?.last_name}</TableCell>
                                <TableCell>{user?.email}</TableCell>
                                <TableCell style={{ display: "flex", justifyContent: "right" }}>
                                    <Tooltip title="View" placement="top">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            size="small"
                                            className="mr-5 hover:bg-purple"
                                            onClick={() => handleOpenDetailsModal(user)}
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
                                            onClick={() => handleEditUser(user._id)}
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
                                            onClick={() => handleOpenDeleteModal(user)}
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
                                No users available
                            </TableCell></TableRow>}
                    </TableBody>
                    {users?.length > 10 && <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6} className="text-center" component="th" scope="row">
                                <Pagination count={totalPages} page={page} onChange={handleChangePage} color="secondary" />
                            </TableCell>
                        </TableRow>
                    </TableFooter>}
                </Table>
            </TableContainer> : <FuseLoading />}
            {openDetailsModal && <UsersDetailsModal open={openDetailsModal} setOpen={setOpenDetailsModal} user={userToShow} />}
            {openDeleteModal && <ConfirmationDeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal}
                message={"Are you sure you want to delete the user?"} onConfirm={handleDelete} />}
        </div>
    );
}

export default UsersPage;
