import logo from '../testlogo.jpg';
import '../App.css';
import { Select } from 'antd';
import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import './inputInfoPage.css';


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


function InputPage() {
    const history = useHistory();
    function handleClick() {
        history.push("/results");
      }
    const steps = [
        {
          title: 'State',
          content: 
          <Select
                          showSearch
                          style={{ width: 300 }}
                          placeholder="Select Your State"
                          optionFilterProp="children"
                          onChange={onChange}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                          <Option value="AL">AL</Option>
                          <Option value="AK">AK</Option>
                          <Option value="AZ">AZ</Option>
                          <Option value="AR">AR</Option>
                          <Option value="CA">CA</Option>
                          <Option value="CO">CO</Option>
                          <Option value="CT">CT</Option>
                          <Option value="DE">DE</Option>
                          <Option value="DC">DC</Option>
                          <Option value="FL">FL</Option>
                          <Option value="GA">GA</Option>
                          <Option value="HI">HI</Option>
                          <Option value="ID">ID</Option>
                          <Option value="IL">IL</Option>
                          <Option value="IN">IN</Option>
                          <Option value="IA">IA</Option>
                          <Option value="KS">KS</Option>
                          <Option value="KY">KY</Option>
                          <Option value="LA">LA</Option>
                          <Option value="ME">ME</Option>
                          <Option value="MD">MD</Option>
                          <Option value="MA">MA</Option>
                          <Option value="MI">MI</Option>
                          <Option value="MN">MN</Option>
                          <Option value="MS">MS</Option>
                          <Option value="MO">MO</Option>
                          <Option value="NE">NE</Option>
                          <Option value="NV">NV</Option>
                          <Option value="NH">NH</Option>
                          <Option value="NJ">NJ</Option>
                          <Option value="NM">NM</Option>
                          <Option value="NY">NY</Option>
                          <Option value="NC">NC</Option>
                          <Option value="ND">ND</Option>
                          <Option value="OH">OH</Option>
                          <Option value="OK">OK</Option>
                          <Option value="OR">OR</Option>
                          <Option value="PA">PA</Option>
                          <Option value="RI">RI</Option>
                          <Option value="SC">SC</Option>
                          <Option value="SD">SD</Option>
                          <Option value="TN">TN</Option>
                          <Option value="TX">TX</Option>
                          <Option value="UT">UT</Option>
                          <Option value="VT">VT</Option>
                          <Option value="VA">VA</Option>
                          <Option value="WA">WA</Option>
                          <Option value="WV">WV</Option>
                          <Option value="WI">WI</Option>
                          <Option value="WY">WY</Option>
                      </Select>
          ,
        },
        {
          title: 'ZIP Code',
          content: <Input placeholder="ZIP Code" />,
        },
        {
          title: 'Procedure',
          content: <Select
          showSearch
          style={{ width: 300 }}
          placeholder="Select Your Procedure"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
      >
          <Option value="Procedure 1">Procedure 1</Option>
          <Option value="Procedure 2">Procedure 2</Option>
          <Option value="Procedure 3">Procedure 3</Option>
          <Option value="Procedure 4">Procedure 4</Option>
          <Option value="Procedure 5">Procedure 5</Option>
          
      </Select>,
        },
      ];
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
    function backHome() {
        history.push("/home");
      }
    return(
        <div className="App-background">
            <div className="Info-header-content">
                <div className="Info-text-header" onCLick={backHome}>
                    HealthCare 4 Virgins
                </div>
            </div>
            <div className="Info-container">

                <h1 className="Info-container-header">
                    Enter Your Information
                </h1>
                <div className="Info-state-select">
                    <>
                        <Steps current={current} >
                            {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className="steps-content-container">
                            <div className="steps-content">{steps[current].content}</div>
                        </div>
                        <div className="steps-content-container">
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                                )}
                                {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => {
                                    handleClick()
                                    message.success('Processing complete!')
                                }}>
                                    Done
                                </Button>
                                )}
                                {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                    Previous
                                </Button>
                                )}
                            </div>
                        </div>

                    </>
            
                </div>
            </div>

      </div>
  
    );
}

export default InputPage;