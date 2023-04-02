import {Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import * as React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RepertoryService from "../../../../shared/services/repertory-service";
import FuseLoading from "@fuse/core/FuseLoading";
import DateTimeHelper from "src/app/shared/helpers/DateTimeHelper";

const RepertorySeatReservations = () => {
    const rows = [];
    const navigate = useNavigate();
    const repertoryId = useParams().id;
    const [isLoading, setIsLoading] = useState(false);
    const [movieRepertory, setMovieRepertory] = useState({});
    let seatsLeft;

    useEffect(() => {
        setIsLoading(true);
        RepertoryService.getMovieByIdFromRepertory(repertoryId).then((response) => {
            if (response) {
                setMovieRepertory(response?.data);
                seatsLeft =response?.data?.number_of_tickets;
                setIsLoading(false);
            }
        })
    }, []);

    for (let i = 0; i < 20; i++) {
        if (seatsLeft > 0) {
            seatsLeft--;
        }
        rows.push(<Paper key={i}
                         className="inline-block w-10 h-10 md:w-32 md:h-32 sm:w-24 sm:h-24 mr-5 mb-5 rounded-0 cursor-pointer"/>);
    }

    const handleBackToRepository = () => {
        navigate("/settings/repertory");
    }

    return (
        <>
            {isLoading ? <FuseLoading/> : <div className="p-36">
                <div className="flex w-full container">
                    <div
                        className="flex flex-col sm:flex-row flex-auto items-center sm:items-center min-w-0 mb-24 px-5">
                        <div className="flex flex-col flex-auto">
                            <Typography
                                className="text-3xl text-center sm:text-left font-semibold tracking-tight leading-8">
                                {movieRepertory?.movie?.name}
                            </Typography>
                            <Typography className="font-medium tracking-tight text-center sm:text-left"
                                        color="text.secondary">
                                {DateTimeHelper.convertToLocalFormat(movieRepertory?.dateTime)}, {movieRepertory?.price}&nbsp;&euro;
                            </Typography>
                        </div>
                        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
                            <i className="inline-block w-8 h-8 rounded mr-5 bg-green animate-ping"></i>{movieRepertory?.number_of_tickets}/220
                            tickets
                            left
                            <Button
                                className="whitespace-nowrap"
                                variant="contained"
                                color="primary"
                                startIcon={<FuseSvgIcon size={20}>heroicons-outline:arrow-left</FuseSvgIcon>}
                                onClick={handleBackToRepository}
                            >
                                Back to Repertory
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-full container flex justify-center">
                    <div className="block">
                        <Paper
                            className="h-10 sm:h-24 md:h-32 w-320 sm:w-2xl md:w-3xl rounded-0 text-center font-semibold uppercase flex justify-center items-center">Screen</Paper>
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
            </div>}
        </>
    );
}

export default RepertorySeatReservations;
