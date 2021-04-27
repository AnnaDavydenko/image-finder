import React, {FC, useCallback, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import theme from "./theme";
import {ThemeProvider} from '@material-ui/core/styles';
import Navigation from "./components/Navigation";
import SearchPage from "./components/SearchPage";
import Bookmarks from "./components/Bookmarks";
import {Grid} from "@material-ui/core";
interface IRedux {}

interface IDispatch {}

type IProps = IRedux & IDispatch;

const App: FC<IProps> = (props: IProps) => {
    const {} = props;

    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <Grid container>
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

export default App;
