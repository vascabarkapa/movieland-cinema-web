import React from 'react';
import { Paper } from '@mui/material';

const NUM_ROWS = 11;
const NUM_COLS = 20;
const WHITE_SEAT = "inline-block w-10 h-10 md:w-32 md:h-32 sm:w-24 sm:h-24 mr-5 mb-5 rounded-0";
const RED_SEAT = "inline-block bg-red w-10 h-10 md:w-32 md:h-32 sm:w-24 sm:h-24 mr-5 mb-5 rounded-0";

const Seat = ({ seatsLeft }) => {
    const papers = [];

    for (let i = 0; i < NUM_ROWS; i++) {
        const row = [];

        for (let j = 0; j < NUM_COLS; j++) {
            const index = i * NUM_COLS + j;
            const reservedStyle = seatsLeft > 0 ? RED_SEAT : WHITE_SEAT;

            row.push(
                <Paper key={index}
                    className={reservedStyle} />
            );

            seatsLeft--;
        }

        papers.push(<div key={i} style={i === 4 ? { display: 'flex', marginBottom: '20px' } : { display: 'flex' }}>{row}</div>);
    }

    return <div>{papers}</div>;
}

export default Seat;
