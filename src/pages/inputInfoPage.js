import logo from '../testlogo.jpg';
import '../App.css';
import { Select } from 'antd';
import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import './inputInfoPage.css';
import './resultsPage.css';


const { Step } = Steps;


const { Option } = Select;
function onChange(value) {
    console.log(`selected ${value}`);
    console.log("heyyy");
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
    function selectState(value) {
        setStateName(value);
        setStatePlaceHolder(value);
    }
    function selectZip(value) {
        setZipCode(value);
    }
    function selectType(value) {
        setType(value);
        setTypePlaceHolder(value);
    }
    function selectName(value) {
        setName(value);
        setNamePlaceHolder(value);
    }
    
    const proceduresTypes = {
        "Surgery": 1,
        "Anesthesia Services": 2,
        "Medical Services and Procedures": 3,
        "Pathology and Laboratory Services": 4,
        "Evaluation and Management Services": 5,
        "Radiology Services": 6,
    };

    // These are the four variables we are keeping track of
    const [state, setStateName] = React.useState(null);
    const [zipcode, setZipCode] = React.useState(null);
    const [procedureType, setType] = React.useState(null);
    const [procedureName, setName] = React.useState(null);
    const [done, setDone] = React.useState(false);
    //
    const [statePlaceHolder, setStatePlaceHolder] = React.useState("Select Your State");
    const [zipcodePlaceHolder, setZipCodePlaceHolder] = React.useState("ZIP Code");
    const [typePlaceHolder, setTypePlaceHolder] = React.useState("Select The Type Of Procedure");
    const [namePlaceHolder, setNamePlaceHolder] = React.useState("Select Your Procedure");

    const steps = [
        {
          title: 'State',
          content: 
          <Select
                          showSearch
                          style={{ width: 300 }}
                          placeholder=  {statePlaceHolder}
                          value = {state}
                          optionFilterProp="children"
                          onChange={selectState}
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
          content: <Input placeholder={zipcodePlaceHolder} value={zipcode} onChange={event => {
              setZipCodePlaceHolder(event.target.value);
              setZipCode(event.target.value)
            }}/>,
        },
        {
          title: 'Procedure',
          content: <Select
          showSearch
          style={{ width: 300 }}
          placeholder={typePlaceHolder}
          value = {procedureType}
          optionFilterProp="children"
          onChange={selectType}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
      >
          <Option value="Surgery">Surgery</Option>
          <Option value="Anesthesia Services">Anesthesia Services</Option>
          <Option value="Medical Services and Procedures">Medical Services and Procedures</Option>
          <Option value="Pathology and Laboratory Services">Pathology and Laboratory Services</Option>
          <Option value="Evaluation and Management Services">Evaluation and Management Services</Option>
          <Option value="Radiology Services">Radiology Services</Option>
      </Select>,
        },
        {
            title: 'Procedure Name',
            content: proceduresTypes[procedureType] == 1 ? <Select
            showSearch
            style={{ width: 300 }}
            placeholder={namePlaceHolder}
            value = {procedureName}
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >   
            <Option value='Insertion of needle into vein for collection of blood sample'>Insertion of needle into vein for collection of blood sample</Option>
            <Option value='Aspiration and/or injection of large joint or joint capsule'>Aspiration and/or injection of large joint or joint capsule</Option>
            <Option value='Removal of cataract with insertion of lens'>Removal of cataract with insertion of lens</Option>    
            <Option value='Destruction of skin growth'>Destruction of skin growth</Option>
            <Option value='Injections of lower or sacral spine facet joint using imaging guidance'>Injections of lower or sacral spine facet joint using imaging guidance</Option>
            <Option value='Biopsy of the esophagus, stomach, and/or upper small bowel using an endoscope'>Biopsy of the esophagus, stomach, and/or upper small bowel using an endoscope</Option>
            <Option value='Destruction of 2-14 skin growths'>Destruction of 2-14 skin growths</Option>
            <Option value='Biopsy of large bowel using an endoscope'>Biopsy of large bowel using an endoscope</Option>        
            <Option value='Destruction of up to 14 skin growths'>Destruction of up to 14 skin growths</Option>
            <Option value='Removal of impact ear wax, one ear'>Removal of impact ear wax, one ear</Option>
        </Select> : proceduresTypes[procedureType] == 2 ? <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select Your Procedure"
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            
                <Option value='Anesthesia for open or endoscopic total knee joint replacement'>Anesthesia for open or endoscopic total knee joint replacement</Option>
                <Option value='Anesthesia for procedure on nerves, muscles, tendons, fascia, and bursae of forearm, wrist, and hand'>Anesthesia for procedure on nerves, muscles, tendons, fascia, and bursae of forearm, wrist, and hand</Option>  
                <Option value='Anesthesia for open procedure on bones of lower leg, ankle and foot'>Anesthesia for open procedure 
                on bones of lower leg, ankle and foot</Option>
                <Option value='Anesthesia for X-ray or radiation therapy'>Anesthesia for X-ray or radiation therapy</Option>      
                <Option value='Anesthesia for open total hip joint replacement'>Anesthesia for open total hip joint replacement</Option>
                <Option value='Anesthesia for open or endoscopic procedure on knee including'>Anesthesia for open or endoscopic procedure on knee including</Option>
                <Option value='Anesthesia for open or endoscopic procedure at upper arm and shoulder joint including'>Anesthesia for open or endoscopic procedure at upper arm and shoulder joint including</Option>
            </Select> : proceduresTypes[procedureType] == 3 ? <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select Your Procedure"
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value='Established patient office or other outpatient visit, typically 15 minutes'>Established patient office or other outpatient visit, typically 15 minutes</Option>
            <Option value='Established patient office or other outpatient, visit typically 25 minutes'>Established patient office or other outpatient, visit typically 25 minutes</Option>
            <Option value='New patient office or other outpatient visit, typically 45 minutes'>New patient office or other outpatient visit, typically 45 minutes</Option>
            <Option value='New patient office or other outpatient visit, typically 30 minutes'>New patient office or other outpatient visit, typically 30 minutes</Option>
            <Option value='Subsequent hospital inpatient care, typically 25 minutes per day'>Subsequent hospital inpatient care, typically 25 minutes per day</Option>
            <Option value='Vaccine for influenza for injection into muscle'>Vaccine for influenza for injection into muscle</Option>
            <Option value='Initial hospital inpatient care, typically 70 minutes per day'>Initial hospital inpatient care, typically 70 minutes per day</Option>
            <Option value='Subsequent hospital inpatient care, typically 35 minutes per day'>Subsequent hospital inpatient care, typically 35 minutes per day</Option>
            <Option value='Established patient office or other outpatient, visit typically 40 minutes'>Established patient office or other outpatient, visit typically 40 minutes</Option>
            <Option value='Established patient office or other outpatient visit, typically 10 minutes'>Established patient office or other outpatient visit, typically 10 minutes</Option>
        </Select> : proceduresTypes[procedureType] == 4 ? <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select Your Procedure"
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value='Automated urinalysis test'>Automated urinalysis test</Option>
            <Option value='Hemoglobin A1C level'>Hemoglobin A1C level</Option>
            <Option value='Complete blood cell count (red cells, white blood cell, platelets), automated test'>Complete blood 
            cell count (red cells, white blood cell, platelets), automated test</Option>
            <Option value='Urinalysis, manual test'>Urinalysis, manual test</Option>
            <Option value='Blood test, comprehensive group of blood chemicals'>Blood test, comprehensive group of blood chemicals</Option>
            <Option value='Blood test, lipids (cholesterol and triglycerides)'>Blood test, lipids (cholesterol and triglycerides)</Option>
            <Option value='Manual urinalysis test with examination using microscope'>Manual urinalysis test with examination using microscope</Option>
            <Option value='Blood test, clotting time'>Blood test, clotting time</Option>
            <Option value='Blood test, thyroid stimulating hormone (TSH)'>Blood test, thyroid stimulating hormone (TSH)</Option>
            <Option value='Blood test, basic group of blood chemicals'>Blood test, basic group of blood chemicals</Option> 
        </Select>: proceduresTypes[procedureType] == 5 ? <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select Your Procedure"
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value='Established patient office or other outpatient visit, typically 15 minutes'>Established patient office or other outpatient visit, typically 15 minutes</Option>
            <Option value='Established patient office or other outpatient, visit typically 25 minutes'>Established patient office or other outpatient, visit typically 25 minutes</Option>
            <Option value='New patient office or other outpatient visit, typically 45 minutes'>New patient office or other outpatient visit, typically 45 minutes</Option>
            <Option value='New patient office or other outpatient visit, typically 30 minutes'>New patient office or other outpatient visit, typically 30 minutes</Option>
            <Option value='Subsequent hospital inpatient care, typically 25 minutes per day'>Subsequent hospital inpatient care, typically 25 minutes per day</Option>
            <Option value='Initial hospital inpatient care, typically 70 minutes per day'>Initial hospital inpatient care, typically 70 minutes per day</Option>
            <Option value='Subsequent hospital inpatient care, typically 35 minutes per day'>Subsequent hospital inpatient care, typically 35 minutes per day</Option>
            <Option value='Established patient office or other outpatient, visit typically 40 minutes'>Established patient office or other outpatient, visit typically 40 minutes</Option>
            <Option value='Established patient office or other outpatient visit, typically 10 minutes'>Established patient office or other outpatient visit, typically 10 minutes</Option>
            <Option value='Initial hospital inpatient care, typically 50 minutes per day'>Initial hospital inpatient care, typically 50 minutes per day</Option>
        </Select> : <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select Your Procedure"
            optionFilterProp="children"
            onChange={selectName}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value='X-ray of chest, 2 views'>X-ray of chest, 2 views</Option>
            <Option value='X-ray of shoulder, minimum of 2 views'>X-ray of shoulder, minimum of 2 views</Option>
            <Option value='Ultrasound of abdomen'>Ultrasound of abdomen</Option>
            <Option value='X-ray of hip with pelvis, 2-3 views'>X-ray of hip with pelvis, 2-3 views</Option>
            <Option value='X-ray of foot, minimum of 3 views'>X-ray of foot, minimum of 3 views</Option>
            <Option value='X-ray of lower and sacral spine, 2 or 3 views'>X-ray of lower and sacral spine, 2 or 3 views</Option>
            <Option value='Mammography of both breasts'>Mammography of both breasts</Option>
            <Option value='X-ray of knee, 3 views'>X-ray of knee, 3 views</Option>
            <Option value='CT scan of abdomen and pelvis with contrast'>CT scan of abdomen and pelvis with contrast</Option>  
            <Option value='CT scan chest'>CT scan chest</Option>
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
         done == false ?
        <div className="App-background">
            <div className="Info-header-content">
                <div className="Info-text-header" onCLick={backHome}>
                    HealthCare 4 Virgins
                </div>
            </div>
            <div className="Info-container">

                <h1 className= "Info-container-header">
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
                                    setDone(true);
                                    handleClick()
                                    message.success('Processing complete!')
                                }}>
                                    Calculate
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
      : <div className="App-background">
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
                    <div className="Results-back-button" onClick={setDone(false)}>
                        Update Search Info
                    </div>
                </div>
            </div>
            
      </div>
  
  
    );
}

export default InputPage;