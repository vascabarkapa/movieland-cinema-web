import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import _ from "@lodash";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import * as React from "react";
import {Box} from "@mui/system";
import Card from "@mui/material/Card";

const RepertorySeatReservations = () => {
    const rows = [];

    for (let i = 0; i < 20; i++) {
        rows.push(<Paper key={i} className="inline-block w-32 h-32 mr-5 mb-5 rounded-0"/>);
    }

    return (
        <div className="p-36">
            <div className="flex w-full container">
                <div className="flex flex-col sm:flex-row flex-auto items-center sm:items-center min-w-0 mb-24 px-5">
                    <div className="flex flex-col flex-auto">
                        <Typography
                            className="text-3xl text-center sm:text-left font-semibold tracking-tight leading-8">
                            Movie Name
                        </Typography>
                        <Typography className="font-medium tracking-tight text-center sm:text-left"
                                    color="text.secondary">
                            12.12.2022. at 19.30h, 5.30 euros
                        </Typography>
                    </div>
                    <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
                        220/220 tickets left
                    </div>
                </div>
            </div>
            <div className="w-full container flex justify-center">
                <div className="block">
                    <Paper style={{width: '760px'}} className="h-24 rounded-0 text-center font-semibold uppercase flex justify-center items-center">Screen</Paper>
                    <br/>
                    <div className="flex justify-center">
                        <div className="block">
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <br/>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                            <div>{rows}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepertorySeatReservations;
