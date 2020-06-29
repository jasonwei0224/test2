import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

const Button1 = (props) => {
    const colStyle = {
        marginBottom:"50px",
        textAlign:"center"
      };

    return (
        <Row>
        <Col style={{ marginBottom: "50px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
        <Button onClick={props.onclick} variant="primary" type="submit" bsPrefix="uploadButton">{props.name}</Button>
        </Col>
        </Row>

        <Row>
            <Col style={{ marginBottom: "50px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                <Button variant="primary" type="submit" bsPrefix="uploadButton">SHARE WITH FRIENDS</Button>
            </Col>
        </Row>
        
    );
}

export default Button1;
