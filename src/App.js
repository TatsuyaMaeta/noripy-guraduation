import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import PlaceToVisit2 from "./components/PlaceToVisit2";
import PlaceToVisit3 from "./components/PlaceToVisit3";
import PlaceToVisit4 from "./components/PlaceToVisit4";
import PlaceToVisit5 from "./components/PlaceToVisit5";
import PlaceToVisit6 from "./components/PlaceToVisit6";
import PlaceToVisit7 from "./components/PlaceToVisit7";
import PlaceToVisit8 from "./components/PlaceToVisit8";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
}));
export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <PlaceToVisit />
            <PlaceToVisit2 />
            <PlaceToVisit3 />
            <PlaceToVisit4 />
            <PlaceToVisit5 />
            <PlaceToVisit6 />
            <PlaceToVisit7 />
            <PlaceToVisit8 />
        </div>
    );
}
