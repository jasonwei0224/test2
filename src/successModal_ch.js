import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'


function SuccessModal_ch(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header className="modalHeader">表格已送出</Modal.Header>
            <Modal.Body className="modalContents">謝謝您的參與！</Modal.Body>
            <Modal.Footer>
                <Button className="btnCancelIn_Modal"  onClick={props.onClick} >關閉</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuccessModal_ch;
