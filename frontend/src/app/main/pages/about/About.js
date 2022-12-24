import {styled} from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Tooltip from "@mui/material/Tooltip";
import GoogleMapReact from 'google-map-react';
import InfoWindow from 'google-map-react';
import Typography from "@mui/material/Typography";
import {CardContent} from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";


function Marker({text}) {
    return (
        <Tooltip title={text} placement="top">
            <FuseSvgIcon className="text-red">heroicons-outline:location-marker</FuseSvgIcon>
        </Tooltip>
    );
}

function AboutPage() {
    return (
        <>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCt3KWfhhNIKluMJPta7TLa3-zA2KEoFMM'
                }}
                defaultZoom={18}
                defaultCenter={[43.736899, 18.566168]}
            >
                <Marker text="Movieland Cinema" lat="43.737070" lng="18.568478"/>
            </GoogleMapReact>
            <div className="bg-white h-288 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-24 md:mt-48">
                    <div className="flex justify-center items-center">
                        <img style={{height: '100px'}} src="/assets/images/logo/movieland_main.svg"
                             alt="Movieland_Cinema_Logo"/>
                        <Typography className="text-3xl text-left font-semibold tracking-tight leading-8">
                            Movieland Cinema <br/>
                            <Typography className="text-12 text-left">
                                Olimpijska bb, Jahorina, Bosnia and Herzegovina <br/>
                            </Typography>
                            <Typography className="text-12 text-left">
                                +38757000111, www.movielandcinema.com <br/>
                            </Typography>
                        </Typography>
                    </div>
                    <div className="flex justify-center items-center">
                        Work time <br/>
                        Monday - Thursday: 18.00 - 22.00 <br/>
                        Friday - Sunday: 18.00 - 23.00
                    </div>
                </div>
            </div>
        </>

    );
}

export default AboutPage;
