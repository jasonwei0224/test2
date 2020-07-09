import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modalStyle.css'


class SuccessModal extends Component {
  refreshPage() {
    window.location.reload(false);
  }
  render() {
    return (
      <Modal show={this.props.show}>
          <Modal.Header className="modalHeader">Success</Modal.Header>
          <Modal.Body className="modalContents">Thanks for submitting!</Modal.Body>
          <Modal.Footer>
              <Button className="btnCancelIn_Modal"  onClick={() => { this.props.onClick(); this.refreshPage();}} >Close</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

export default SuccessModal;

