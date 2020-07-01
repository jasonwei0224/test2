import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import './FormConsent.css'

// const FormConsent = (props) => {
//     const [checked, setChecked] = React.useState(false);
//     const handleChecked = ({target}) => {
//         setChecked(target.checked);
//         console.log(checked);
//     }
//     return (
//         <Row style={{marginBottom:"30px"}}>
//             <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
//                 <Form.Check aria-label="option 1"/>
//                 <input type="checkbox" className="custom-control-input" id={props.inputId} onChange={}></input>
//             </Col>
//             <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
//                 <div className="consentLine" style={{color:"#BE0027"}} >I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project.</div>
//             </Col>
//          </Row>
        
//     );
// }

// export default FormConsent;

class FormConsent extends Component {
    constructor(props){
        super(props);
        this.state={
            consentClicked: false
        }
    }
    handleConsentCheckBox=(e)=> {

        this.setState({consentChecked:!this.state.consentChecked}, ()=>{
            console.log(this.state.consentChecked);
        });
        console.log("clicked");
    }

    render() {
        return (
            <Row style={{marginBottom:"30px"}}>
             <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                 <Form.Check aria-label="option 1"/>
                 <input type="checkbox" className="custom-control-input" id={this.props.inputId} checked={this.state.consentChecked} onChange={this.handleConsentCheckBox}></input>
             </Col>
             <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                 <div className="consentLine" style={{color:"#BE0027"}} >I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project.</div>
             </Col>
          </Row>
        );
    }
    
}
export default FormConsent;
