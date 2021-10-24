import logo from '../testlogo.jpg';
import '../App.css';
import { useHistory } from "react-router-dom";
import './landingPage.css';
import { Row, Col } from 'antd';

function LandingPage() {
    const history = useHistory();
    function handleClick() {
        history.push("/input");
      }
    
    return(
        <div className="App-background">
            <div className="Header-content">
                <>
                    <Row align="middle">
                    <Col span={8}>
                        <div className="Text-header">
                            HealthCare 4 Virgins
                        </div>
                    </Col>
                    <Col span={9}></Col>
                    <Col span={7}>
                        <div className="Header-button-container">
                            <div className="Header-content-button" onClick={handleClick}>
                                Get Your Approximation
                            </div>
                        </div>
                    </Col>
                    </Row>
                </>,
                
            </div>
        <div className="Landing-content">
          <div className="Landing-content-left">
            <div className="Main-content-text">
            Get Your HealthCare Quote Today
            </div>
            <div className="Sub-content-text">
              The healthcare system should be there to help you. Let us make sure it does.
            </div>
            <div className="Button-container">
              <div className="Content-button" onClick={handleClick}>
                Get Your Approximation
              </div>
            </div>
          </div>
          <div className="Landing-logo">
            <img src={logo} />
          </div>
  
        </div>
      </div>
  
    );
}

export default LandingPage;