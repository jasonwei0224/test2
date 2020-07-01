import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'

function InvalidFileModal_ch(props) {
    return (
        <Modal show={props.showInvalidFile}>
          <Modal.Header className="modalHeader">檔案格式/尺寸有誤</Modal.Header>
          <Modal.Body className="modalContents">
          檔案格式必須為jpg或png，且檔案大小在1MB以下
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnCancelIn_Modal"  onClick={props.onClick} >關閉</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default InvalidFileModal_ch;
