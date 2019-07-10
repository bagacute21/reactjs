import React, { Component } from 'react';
import '../css/PlatformsCreation1.css';

class PlatformsCreation1 extends Component {
    
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                                       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                                       crossorigin="anonymous"/>
                <button id="btn"><i class="fas fa-upload"></i></button>

                <div id="createtitle">
                Platforms Creation
                </div>

                <div id="createsubtitle">
                DevOps Technology Orchestration
                </div>

                <div id="platformcon">
                {/* body container */}
                </div>

                <div id="platformcon0">
                    <label id = "platformname">Platform Name</label><br/><br/>
                    <label id = "platformsubname">My Current Platform</label><br/><br/>
                    <label id = "platformprovider">Platform Provider</label><br/>
                </div>

                    <div id = "platformcon1">
                    <label>On-Premise</label><br/>
                    Custom Provider
                    </div>

                <div id = "platformcon2">
                    <label>GCP</label><br/>
                    Google Cloud Platform
                </div>

                <div id = "platformcon3">
                    <label>AWS</label><br/>
                    Amazon Web Services
                </div>

                <div id = "platformcon4">
                    <label>Azure</label><br/>
                    Microsoft
                </div>
            
                <div id = "estimatedcost">
                <label>Estimated Cost:</label>
                $0.0
                </div>
                
                <div id = "platformcon5">
                You selected to provision the technology platform<br/>
                in an on-premise server. You will have to provide<br/>
                further details about the server and to allow<br/>
                certain permissions to proceed with the creation of<br/>
                your platform.<br/>
                </div>

                <div id="icon">
                <i class="fas fa-server"></i>
                </div>

            </div>
        );
    }
}

export default PlatformsCreation1;
