import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default function MainLayout(props) {
    const classes = useStyles();    
    const { children } = props;

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Header open={ open } handleDrawerOpen={ handleDrawerOpen }/>

            <Sidebar open={ open } handleDrawerClose={ handleDrawerClose }/>

            <Content fluid >

                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        
                        {children}

                        <Box pt={4}>
                        </Box>
                    </Container>
                </main>
                
                <Footer />
            </Content>
        </div>
    )
}