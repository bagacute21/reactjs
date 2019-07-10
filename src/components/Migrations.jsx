import React, { Component, Fragment } from 'react';
import "../css/Migrations.css";

class Migrations extends Component {
    render () {
        return (
            <Fragment>
                <div>
    
                <button id="btn"><i class="fas fa-bolt"></i></button>

                <div id="migrationtitle">
                Migrations Dashboard<br/>
                </div>
                
                <div id="migrationsubtitle">
                Automation Evaluation
                </div>

                <div id="migrationcon1">
                Spring Petclinic Pipeline<br/>
                <button id="migration-btn"><i class="fab fa-aws"></i></button>
                <button id="migration-btn"><i class="fab fa-jenkins"></i></button>
                <button id="migration-btn"><i class="far fa-clone"></i></button>
                <i class="fas fa-angle-double-right"></i>
                &emsp;
                <button id="migration-btn"><i class="fab fa-angular"></i></button>
                <button id="migration-btn"><i class="fas fa-undo-alt"></i></button>
                <button id="migration-btn"><i class="fas fa-cube"></i></button>
                <p id="migration-text">Bamboo Pipeline v2.0 <i class="fas fa-cloud-download-alt"></i></p>
                </div>
                
                <div id="migrationcon2">
                Spring Petclinic Pipeline<br/>
                <button id="migration-btn"><i class="fab fa-aws"></i></button>
                <button id="migration-btn"><i class="fab fa-jenkins"></i></button>
                <button id="migration-btn"><i class="far fa-clone"></i></button>
                <i class="fas fa-angle-double-right"></i>
                &emsp;
                <button id="migration-btn"><i class="fab fa-angular"></i></button>
                <button id="migration-btn"><i class="fas fa-undo-alt"></i></button>
                <button id="migration-btn"><i class="fas fa-cube"></i></button>
                <p id="migration-text">Bamboo Pipeline <i class="fas fa-cloud-download-alt"></i></p>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Migrations;