import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

export default function ApplicationView() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}></div>
        </Router>
    );
}