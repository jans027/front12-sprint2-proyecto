import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomePage from './HomePage';
import Test from './Test';
import Usuario from './Usuario';
import { Box1 } from '../styles/Footer2';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContentPasteOff from '@mui/icons-material/ContentPasteOff';
import Person from '@mui/icons-material/Person';
import { PageConstruccion } from './PageConstruccion';
import { Container } from '@mui/material';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div sx={{ p: 0 }}>
                    <Box>{children}</Box>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Footer2() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box1 sx={ { borderBottom: 0, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<HomeIcon />} {...a11yProps(0)} />
                    <Tab icon={<AssignmentIcon />} {...a11yProps(1)} />
                    <Tab icon={<ContentPasteOff />} {...a11yProps(2)} />
                    <Tab icon={<Person />} {...a11yProps(3)} />
                </Tabs>
            </Box1>
            <Box sx={{ width: '100%' }}>
                <TabPanel  value={value} index={0}>
                    <HomePage/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Test/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <PageConstruccion/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Usuario/>
                </TabPanel>
            </Box>
        </Box>
    );
}