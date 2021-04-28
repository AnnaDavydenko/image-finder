import React, {FC, useCallback, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme";
import {createStyles, makeStyles, Theme, ThemeProvider} from '@material-ui/core/styles';
import Navigation from "./components/Navigation";
import SearchPage from "./components/SearchPage";
import Bookmarks from "./components/Bookmarks";
import {Grid} from "@material-ui/core";

const App: FC = () => {
    const classes = useStyles();

    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <Grid container className={classes.container}>
                        <Grid item xs={1}>
                            <Navigation/>
                        </Grid>
                        <Grid item xs={11}>
                            <Switch>
                                <Route component={SearchPage} exact path="/" />
                                <Route component={Bookmarks} path="/bookmarks" />
                            </Switch>
                        </Grid>
                    </Grid>
                    <Footer/>
                </ThemeProvider>
            </Router>
        </>
    );
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            // height: 'calc(100% - 111px)',
        },
    })
);

export default App;
