import React, { Component } from 'react';
import '../css/Settings.css';


class Settings extends Component {
    
    render() {
        return(
            <div>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                                       integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                                       crossorigin="anonymous"/>
                <button id="btn1"><i class="fas fa-upload"></i></button>
                <button id="btn2"><i class="fas fa-bolt"></i></button>

                <div id = "settingtitle">
                    Settings<br/>
                </div>
                
                <div id = "settingsubtitle">
                    Platform Configuration
                </div>

                <div id = "settingplatform">
                    Platform Design <br />
                </div>

                <div id = "radio">
                    <input type="radio" value="Basic" checked/> Basic <br/>
                    <input type="radio" value="Advance" /> Advance <br /><br/>
                </div>

                <div id = "serversetting">
                    Server Settings
                </div>

                        <div id = "serversetting-ram">
                            <label id = "number">16</label><br/>
                            <label id = "label1"> GB </label><br/><br/>
                            <label id = "label2">RAM</label>
                        </div>

                        <div id = "serversetting-ssd">
                            <label id = "number">500</label><br/>
                            <label id = "label1"> GB </label><br/><br/>
                            <label id = "label2"> SSD </label>
                        </div>

                        <div id = "serversetting-cores">
                            <label id = "number">4</label><br/>
                            <label id = "label1"> Cores </label><br/><br/>
                            <label id = "label2"> CPU </label>
                        </div>

                        <div id = "serversetting-linux">
                            <label id = "type">CentOS</label><br/>
                            <label id = "label1"> Linux </label><br/><br/>
                            <label id = "label2"> OS </label>
                        </div>

               
                
            
            </div>
        );
    }
}

export default Settings;