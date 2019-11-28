import React, { Component,useState } from 'react';
import './qrmodal.styles.scss';
import QRcode from '../../images/timg.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function QRmodal() {
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={QRcode} alt="broken picture" height="80" width="80" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default QRmodal;


// class Modal extends Component {
//     constructor(props) {
//       super(props)
//       this.confirm = this.confirm.bind(this)
//       this.maskClick = this.maskClick.bind(this)
//       this.closeModal = this.closeModal.bind(this)
//       this.state = {
//         visible: false
//       }
//     }
  
//     // 首次渲染使用父组件的状态更新modal中的visible状态，只调用一次
//     componentDidMount() {
//       this.setState({ visible: this.props.visible })
//     }
  
//     // 每次接收props就根据父组件的状态更新modal中的visible状态，首次渲染不会调用
//     componentWillReceiveProps(props) {
//       this.setState({ visible: props.visible })
//     }
  
//     // 点击取消更新modal中的visible状态
//     closeModal() {
//       console.log('大家好，我叫取消')
//       const { onClose } = this.props
//       onClose && onClose()
//       this.setState({ visible: false })
//     }
  
//     confirm() {
//       console.log('大家好，我叫确认')
//       const { confirm } = this.props
//       confirm && confirm()
//       this.setState({ visible: false })
//     }
  
//     maskClick() {
//       console.log('大家好，我是蒙层，我被点击了')
//       this.setState({ visible: false})
//     }
  
//     render() {
//       // 使用modal中维护的visible状态来控制显隐
//       const { visible } = this.state;
//       return visible && <div className="modal-wrapper">
//         <div className="modal">
//           <div className="official_account">
//             <div className="modal-title">公众号</div>
//             <div className="modal-content">
//               <img src={QRcode} alt="broken picture" height="80" width="80" />
//             </div>
//           </div>
//           <div className= "applet">
//             <div className="modal-title">小程序</div>
//             <div className="modal-content">
//               <img src={QRcode} alt="broken picture" height="80" width="80" />
//             </div>
//           </div>
//           <div className="modal-operator">
//             <button
//               onClick={this.closeModal}
//               className="modal-operator-close"
//             >取消</button>
//             <button
//               onClick={this.confirm}
//               className="modal-operator-confirm"
//             >确认</button>
//           </div>
//         </div>
//         <div
//           className="mask"
//           onClick={this.maskClick}
//         ></div>
//       </div>
//     }
//   }
//   export default Modal;
  




