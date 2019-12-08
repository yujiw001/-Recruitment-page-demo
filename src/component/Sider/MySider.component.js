import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './MySider.component.style.css';

const { Sider } = Layout;

class MySider extends Component {
  render() {
    return (
      <div className='ft_backend_sider'>
        <Sider
          width='357px'
          className='ft_backend_sider'
      >
        <Link to='/'>
          <p className='ft_backend_sider_title'>FANTUAN</p>
        </Link>
        
        <Menu className='ft_backend_sider_menu' theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to='/Fantuan_news_change'>
                  <span className="ft_backend_sider_menu_item">新闻频道</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/Fantuan_career_change'>
                <span className="ft_backend_sider_menu_item">招聘频道</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='#'>
                <span className="ft_backend_sider_menu_item">招聘简历</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='#'>
                <span className="ft_backend_sider_menu_item">商家简历</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to='#'>
                <span className="ft_backend_sider_menu_item">垃圾桶</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="46">
              <Link to='#'>
                <span className="ft_backend_sider_menu_item">设置</span>
              </Link>
            </Menu.Item>
        </Menu>

        <pre className='ft_backend_sider_footer'>2019  Fantuan   |   Terms and Conditions</pre>
      </Sider>
          
      </div>

    );
  }
}

export default MySider;
