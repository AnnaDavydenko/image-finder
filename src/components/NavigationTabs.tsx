import React, {FC} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Box, Tab, Tabs} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: any) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
};


const NavigationTabs: FC = () => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label={<AccountCircleIcon/>} {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One dsfdsfsdfdsfsdfsdfdsfsssssssssssssssssssssssssssssssssssssssssssss
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
export default NavigationTabs;
