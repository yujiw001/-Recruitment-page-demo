import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// const Collapse = (props) => {
//     const [isCollapsed,setIsCollapsed] = React.useState(props.collaspsed);
//     const style = {
//         collapsed: {
//           display: "none"
//         },
//         expanded: {
//           display: "block"
//         },
//         buttonStyle: {
//           display: "block",
//           width: "100%"
//         }
//       };
    
//       return (
//         <div>
//           <button
//             style={style.buttonStyle}
//             onClick={() => setIsCollapsed(!isCollapsed)}
//           >
//             {isCollapsed ? "显示" : "隐藏"} 内容
//           </button>
//           <div
//             className="collapse-content"
//             // 决定显示和折叠
//             style={isCollapsed ? style.collapsed : style.expanded}
//             // aria-expanded 是给 Screen Reader 用来 判断当前元素状态的辅助属性
//             aria-expanded={isCollapsed}
//           >
//             {props.children}
//           </div>
//         </div>
//       );
// }

// export default Collapse;

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  }

  export default Example;

