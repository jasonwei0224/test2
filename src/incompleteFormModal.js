import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'

function IncompleteFormModal(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header className="modalHeader">Incomplete Form</Modal.Header>
            <Modal.Body className="modalContents">Please fill out all fields</Modal.Body>
            <Modal.Footer>
                <Button className="btnCancelIn_Modal" bsPrefix="submit_button" onClick={props.onClick} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IncompleteFormModal;
