import React, { Component } from 'react';
import '../css/PipelineDashboard.css';


class PipelineDashboard extends Component {
    
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                                       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                                       crossorigin="anonymous"/>
                <button id="btn"><i class="fas fa-upload"></i></button>

                <div id="dashtitle">
                Pipelines Creation<br/>
                </div>
                
                <div id="dashsubtitle">
                Automation Center
                </div>

                <div id="dashcon0">
                <label>Uploaded Project: </label>
                &emsp; &emsp;&emsp; spring-petclinic_v2.0.0.zip<br/>
                <label>Detected Project Type: </label>
                &emsp; Java Maven
                </div>

                <div id="dashcon1">
                Recommended Technologies<br/>
                <button><i class="fab fa-aws"></i></button>
                <button><i class="fab fa-gitlab"></i></button>
                <button><i class="fab fa-jenkins"></i></button>
                <button><i class="fab fa-docker"></i></button>
                <button><i class="fab fa-angular"></i></button>
                <button><i class="fab fa-java"></i></button>
                </div>
                
                <div id="dashcon2">
                Recommended Pipeline<br/>
                <button><i class="fas fa-cloud"></i></button>
                <button><i class="fab fa-slack"></i></button>
                </div>
                
                <div id='dashcon3'>
                <label>Estimated Cost: &emsp;</label>
                $ 0.0
                </div>
            </div>
        );
    }
}

export default PipelineDashboard;