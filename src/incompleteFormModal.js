import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function IncompleteFormModal(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header>Incomplete Form</Modal.Header>
            <Modal.Body>Please fill out all fields</Modal.Body>
            <Modal.Footer>
                <Button className="btnModal" bsPrefix="submit_button" onClick={props.onClick} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IncompleteFormModal;
