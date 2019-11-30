import React, {useState } from 'react';
import './qrmodal.styles.scss';
import Check from '../../images/check.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const SuccessModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        开始使用
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2>Submit Completed</h2>
            <img src={Check} alt="broken picture" height="130" width="130" />
            <p>We will Contact you within 7 working days by Email</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SuccessModal;