import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function SuccessModal(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header>Success</Modal.Header>
            <Modal.Body>Thanks for submitting!</Modal.Body>
            <Modal.Footer>
                <Button className="btnCancelInModal"  onClick={props.onClick} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuccessModal;
