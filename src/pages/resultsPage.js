import logo from '../testlogo.jpg';
import '../App.css';
import './resultsPage.css';
import { Select } from 'antd';
import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";


const { Step } = Steps;


const { Option } = Select;
function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }


function ResultsPage() {
    const history = useHistory();
    function handleClick() {
        history.push("/input");
      }

    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
    return(
        <div className="App-background">
            <div className="Results-header-content">
                <div className="Results-text-header">
                    HealthCare 4 Virgins
                </div>
            </div>

            <div className="Results-info-container">

                <h1 className="Results-info-container-header">
                    Expected Out Of Pocket Cost
                </h1>
                <div className="Expected-cost-container">
                    <div className="Expected-cost-text">
                        $1,000
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

export default ResultsPage;