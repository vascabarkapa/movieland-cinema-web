import {styled} from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Tooltip from "@mui/material/Tooltip";
import GoogleMapReact from 'google-map-react';
import InfoWindow from 'google-map-react';
import Typography from "@mui/material/Typography";
import {CardContent} from "@mui/material";
import Card from "@mui/material/Card";


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
            <div className="bg-white h-288">
                Ovdje ce ici informacije o bioskopu
                <br/>
                Lokacija
                <br/>
                Radno vijeme
                <br/>
                Kontakt
                <br/>
                Sajt
                <br/>
                Logo takodje
            </div>
        </>

    );
}

export default AboutPage;
