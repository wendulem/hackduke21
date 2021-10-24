import logo from '../testlogo.jpg';
import '../App.css';
import './resultsPage.css';
import { Select } from 'antd';
import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import axios from "axios";




 
function CostPage() {
    const history = useHistory();
    function handleClick() {
        history.push("/input");
      }


    var cost = localStorage.getItem('cost');
  

    return(
        <div className="App-background">
            <div className="Results-header-content">
                <div className="Results-text-header">
                    MedHelp
                </div>
            </div>

            <div className="Results-info-container">

                <h1 className="Results-info-container-header">
                    Expected Out Of Pocket Cost
                </h1>
                <div className="Expected-cost-container">
                    <div className="Expected-cost-text">
                        Cost
                    </div>
                </div>
                <div className="Results-back-button-container">
                    <div className="Results-back-button" onClick={handleClick}>
                        Update Search Info
                    </div>
                </div>
            </div>
            
      </div>
  
    );
}

export default CostPage;