import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'


function SuccessModal(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header className="modalHeader">Success</Modal.Header>
            <Modal.Body className="modalContents">Thanks for submitting!</Modal.Body>
            <Modal.Footer>
                <Button className="btnCancelIn_Modal"  onClick={props.onClick} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuccessModal;
