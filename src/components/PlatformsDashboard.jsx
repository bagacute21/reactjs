import React, { Component, Fragment } from 'react'
import '../css/PlatformsDashboard.css';

class PlatformsDashboard extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossOrigin="anonymous" />
                <Fragment>
                    <button id="btn"><i class="fas fa-plus-circle"></i></button>
                    <div id="platformdashtitle">Platforms Dashboard<br /></div>
                    <div id="platformdashsubtitle">DevOps Technology Orchestration</div>

                    <div className="parent-card1">
                        <h5 className="card-title">My Custom Platform</h5>
                        <h6 className="card-subtitle">07-03-2019 07:15 EST</h6>
                        <h5 className="card-text">Google</h5>
                        {/* <i className="fas fa-cloud"></i><br /> */}
                        <img className = "logo1" src = "https://cloud.google.com/_static/images/cloud/icons/favicons/onecloud/super_cloud.png"/><br/>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="parent-card2">
                        <h5 className="card-title">My AWS Platform</h5>
                        <h6 className="card-subtitle">07-03-2019 07:15 EST</h6>
                        <h5 className="card-text">AWS</h5>
                        {/* <i className="fab fa-aws"></i><br /> */}
                        <img className = "logo1" src ="https://www.appythings.nl/wp-content/uploads/2018/06/aws-logo-icon-PNG-Transparent-Background.png"/><br/>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="platformdashcon1">
                        <img className= "logo" src="https://img.icons8.com/color/48/000000/jenkins.png" />
                        <h5 className="card-title">Jenkins</h5>
                        <h6 className="card-subtitle">Pipeline Orchestrator</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                    <div className="platformdashcon2">
                        <img className = "logo" src="https://img.icons8.com/color/48/000000/gitlab.png" />
                        <h5 className="card-title">Gitlab</h5>
                        <h6 className="card-subtitle">Repository Manager</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                    <div className="platformdashcon3">
                        <img className = "logo" src ="http://intellitech.pro/wp-content/uploads/2017/05/Jacoco.png"/>
                        <h5 className="card-title">Jacoco</h5>
                        <h6 className="card-subtitle">Java Code Coverage</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                    <div className="platformdashcon4">
                        <img className = "logo" src="https://img.icons8.com/color/48/000000/jenkins.png" />
                        <h5 className="card-title">Jenkins</h5>
                        <h6 className="card-subtitle">Pipeline Orchestrator</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                    <div className="platformdashcon5">
                        <img className="logo" src="https://avatars0.githubusercontent.com/u/1303819?s=400&v=4" />
                        <h5 className="card-title">SonarQube</h5>
                        <h6 className="card-subtitle">Code Quality and Security</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                    <div className="platformdashcon6">
                        <img className="logo" src="http://intellitech.pro/wp-content/uploads/2017/05/Jacoco.png" />
                        <br/>
                        <h5>Jacoco</h5>
                        <h6>Java Code Coverage</h6>
                        <div className="tools">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-hdd"></i>
                            <i className="fas fa-upload"></i>
                            <i className="fas fa-th-large"></i>
                        </div>
                    </div>
                </Fragment>
            </div>
        );
    }
}
export default PlatformsDashboard;