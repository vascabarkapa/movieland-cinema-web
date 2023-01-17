import FusePageSimple from '@fuse/core/FusePageSimple';
import {styled} from '@mui/material/styles';
import DashboardHeader from "./components/DashboardHeader";
import MovieWidget from "./components/MovieWidget";
import TicketWidget from "./components/TicketWidget";
import UserWidget from "./components/UserWidget";
import RepertoryWidget from "./components/RepertoryWidget";
import {motion} from 'framer-motion';

const Root = styled(FusePageSimple)(({theme}) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
    },
}));

function DashboardPage() {
    
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    };

    return (
        <Root
            header={<DashboardHeader/>}
            content={
                <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <RepertoryWidget/>
                        </motion.div>
                        <motion.div variants={item}>
                            <MovieWidget/>
                        </motion.div>
                        <motion.div variants={item}>
                            <TicketWidget/>
                        </motion.div>
                        <motion.div variants={item}>
                            <UserWidget/>
                        </motion.div>
                    </motion.div>
                </div>
            }
        />
    );
}

export default DashboardPage;
