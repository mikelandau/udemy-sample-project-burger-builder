import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';


const Layout = (props) => (
    <Fragment>
        <SideDrawer></SideDrawer>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
)

export default Layout;