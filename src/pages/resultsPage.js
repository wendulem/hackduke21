import logo from '../testlogo.jpg';
import '../App.css';
import './resultsPage.css';
import { Select } from 'antd';
import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";



 
function ResultsPage() {
    const history = useHistory();
    function handleClick() {
        history.push("/input");

      }

    const [current, setCurrent] = useState(0);
    const [cost, setCost] = React.useState(null);

    var state = localStorage.getItem('state');
    var zipcode = localStorage.getItem('zipcode');
    var procedure = localStorage.getItem('procedure');
    console.log("eh")
    console.log(state)

    function createPost() {
        console.log(state);
        console.log(procedure);
        console.log(zipcode);
        axios
        .post(baseURL, {
            state_code: state,
            procedure: procedure,
            zip_code: zipcode,
        })
        .then((response) => {
          setCost(response.data);
          localStorage.setItem('cost', response.data);
          history.push("/cost");
        });
    }

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
                        Cost for procedure in {state} and {zipcode}
                    </div>
                </div>
                <div className="Results-back-button-container">
                    <div className="Results-back-button" onClick={createPost}>
                        Update Search Info
                    </div>
                </div>
            </div>
            
      </div>
  
    );
}

export default ResultsPage;