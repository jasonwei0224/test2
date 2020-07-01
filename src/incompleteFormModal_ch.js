import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'

function IncompleteFormModal_ch(props) {
    return (
        <Modal show={props.show}>
            <Modal.Header className="modalHeader">表格未完成</Modal.Header>
            <Modal.Body className="modalContents">請填寫所有欄位</Modal.Body>
            <Modal.Footer>
                <Button className="btnCancelIn_Modal" bsPrefix="submit_button" onClick={props.onClick} >關閉</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IncompleteFormModal_ch;
