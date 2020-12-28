import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Header from "../Header/Header";
import './Layout.scss'

const Layout = (props) => (
    <Auxiliary>
        <Header/>
        <main className="content">
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;