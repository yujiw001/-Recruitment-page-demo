import React, {useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Check from '../../images/check.jpg';

import './successModal.component.style.css';

const SuccessModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        开始使用
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal_size">
        <Modal.Body>
          <div>
            <h2>Thank You</h2>
            <h2>Submit Completed</h2>
            <img src={Check} alt="broken picture" height="135px" width="135px" />
            <p>We will Contact you within 7 working days by Email</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default SuccessModal;