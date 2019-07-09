import React, { Component } from 'react';
import '../css/PipelineCreation.css';

class PipelineCreation extends Component {
    
    render() {
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                                       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                                       crossorigin="anonymous"/>
                <button id="btn"><i class="fas fa-upload"></i></button>

                <div id="createtitle">
                Pipelines Dashboard
                </div>

                <div id="createsubtitle">
                Automation Center
                </div>

                <div id="createcon0">
                <label>Spring Petclinic Pipeline</label><br/>
                07-03-2019 07:15 EST<br/><br/>
                Java Maven Project<br/>
                Hosted in My AWS Platform<br/>
                Orchestrated by Creo
                </div>

                <div id="createcon1">
                <label>Reflex Box Pipeline</label><br/>
                07-03-2019 07:15 EST<br/><br/>
                Java Maven Project<br/>
                Hosted in My AWS Platform<br/>
                Orchestrated by Creo
                </div>

                <div id="createcon2">
                <button><i class="fab fa-aws"></i></button>
                <button><i class="fab fa-docker"></i></button>
                <button><i class="fab fa-angular"></i></button>
                </div>

                <div id="createcon3">
                <button><i class="fab fa-slack"></i></button>
                <button><i class="fab fa-docker"></i></button>
                <button><i class="fab fa-jenkins"></i></button>
                </div>

            </div>
        );
    }
}

export default PipelineCreation;
