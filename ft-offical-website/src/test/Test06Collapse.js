import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../modules/delivery/DeliveryFAQ.css';

const { Panel } = Collapse;

// function callback(key) {
//   console.log(key);
// }

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Demo extends Component {
    // state = {
    //     expandIconPosition: 'right',
    //   };
    
    //   onPositionChange = expandIconPosition => {
    //     this.setState({ expandIconPosition });
    //   };
    
    render() {
    // const { expandIconPosition } = this.state;
    return (
        <>
    
    <div className="fd-faq-general-bg">
          <div className="fd-faq-general-content">

    {/* <Collapse onChange={callback} expandIconPosition={'right'}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0}/>} > */}
    {/* <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition={expandIconPosition}> */}
    <Collapse expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>


<br/>

  <Collapse expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>

  </div>
  </div>
  </>
  );
}
}

export default Demo;