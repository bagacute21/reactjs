import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link } from 'react-router-dom';
import "../css/Sidebar.css";

import logo from "../images/logo.png";
import PlatformsDashboard from "./PlatformsDashboard.jsx";
import PipelineDashboard from "./PipelineDashboard.jsx";
import Migrations from "./Migrations.jsx";
import Settings from "./Settings.jsx"


export default class Sidebar extends Component {
    render() {
        return (
            <HashRouter>
                <PlatformsDashboard/>
                <div className="navbar">
                    <br />
                    <br />
                    <br />
                    <div><img src={logo} className="sidebar-logo" /></div>

                    <p id="sidebar-user">Dany Stormborn</p>
                    <br />

                    <div id="sidebar">
                    <li className="sidebar-button">
                        <Link to="/platforms" id="sidebar-link">
                        <label className="text"><i class="fas fa-layer-group"></i> Platforms</label>
                        </Link>
                    </li>
                    <li className="sidebar-button">
                        <Link to="/pipelines" id="sidebar-link">
                        <label className="text"><i class="fas fa-tools"></i> Pipelines</label>
                        </Link>
                    </li>
                    <li className="sidebar-button">
                        <Link to="/migrations" id="sidebar-link">
                        <label className="text"><i class="fas fa-exchange-alt"></i> Migrations</label>
                        </Link>
                    </li>
                    <li className="sidebar-button">
                        <Link to="/settings" id="sidebar-link">
                        <label className="text"><i class="fas fa-cog"></i> Settings</label>
                        </Link>
                    </li>
                    </div>
                </div>


                 <div>
                     <Route path="/platforms" component={PlatformsDashboard} />
                 </div>
                 <div>
                 <Route path="/pipelines" component={PipelineDashboard} />
                 </div>
                 <div>
                     <Route path="/migrations" component={Migrations} />
                 </div>
                 <div>
                 <Route path="/settings" component={Settings} />
                 </div>
            </HashRouter>
        )
    }
}