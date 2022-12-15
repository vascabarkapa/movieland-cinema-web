import {styled} from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

const Root = styled(FusePageSimple)(({theme}) => ({
    // '& .FusePageSimple-header': {
    //     backgroundColor: theme.palette.background.paper,
    //     borderBottomWidth: 1,
    //     borderStyle: 'solid',
    //     borderColor: theme.palette.divider,
    // },
    '& .FusePageSimple-toolbar': {},
    '& .FusePageSimple-content': {},
    '& .FusePageSimple-sidebarHeader': {},
    '& .FusePageSimple-sidebarContent': {},
}));

function DashboardPage(props) {
    return (
        <Root
            // header={
            //     <div className="p-24">
            //         <h4>{t('TITLE')}</h4>
            //     </div>
            // }
            content={
                <div className="p-24">
                    <h4>Dashboard</h4>
                    <br/>
                    <b>Coming soon.</b>
                </div>
            }
            scroll="content"
        />
    );
}

export default DashboardPage;
