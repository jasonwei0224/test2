import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'


class SuccessModal_ch extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  render() {
    return (
      <Modal show={this.props.show}>
          <Modal.Header className="modalHeader">表格已送出</Modal.Header>
          <Modal.Body className="modalContents">謝謝您的參與！</Modal.Body>
          <Modal.Footer>
              <Button className="btnCancelIn_Modal"  onClick={() => { this.props.onClick(); this.refreshPage();}} >關閉</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

export default SuccessModal_ch;
