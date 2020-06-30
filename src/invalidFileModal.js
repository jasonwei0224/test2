import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function InvalidFileModal(props) {
    return (
        <Modal show={props.showInvalidFile}>
          <Modal.Header>Invalid file type/size</Modal.Header>
          <Modal.Body>
            File must be .jpg or .png and under 1MB
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnCancelInModal"  onClick={props.onClick} >Close</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default InvalidFileModal;
