import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'

function InvalidFileModal(props) {
    return (
        <Modal show={props.showInvalidFile}>
          <Modal.Header className="modalHeader">Invalid file type/size</Modal.Header>
          <Modal.Body className="modalContents">
            File must be .jpg or .png and under 1MB
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnCancelIn_Modal"  onClick={props.onClick} >Close</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default InvalidFileModal;
