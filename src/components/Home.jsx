import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

import "../css/Home.css";

class Home extends Component {
    
    render() {
        return (
            <HashRouter>
                <div id="home">
                    {/* home container */}
                </div>

                    <div id="creologo">
                        {/* comment */}
                    </div>
                    <div id="homelogo">
                        {/* image container */}
                    </div>

                    <div id="hometitle">
                        creous
                    </div>

                    <div id="homecon0">
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button id="reset">Reset Password</button>
                        <button id="sign-in">
 
                            
                            <Link to="/sidebar" id="sidebar-link">
                                Sign In
                            </Link>
                        </button>
                    </div>

                    <div>
                        <Route path="/sidebar" component={Sidebar}/>
                    </div>

            </HashRouter>
        );
    }
}

export default Home;