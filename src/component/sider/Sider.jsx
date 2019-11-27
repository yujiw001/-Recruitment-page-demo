import React from './node_modules/react';
import { Menu } from './node_modules/antd';

class Sider extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 222 , height: '100vh' , background:'#757575', color:'white'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >

        <Menu.ItemGroup key="g1" title="文章编辑">
          <Menu.Item key="1">公司新闻</Menu.Item>
          <Menu.Item key="2">招聘信息</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g2" title="简历文件">
          <Menu.Item key="3">商家简历</Menu.Item>
          <Menu.Item key="4">应聘简历</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g3" title="网站数据">
          <Menu.Item key="5">访问量</Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g4" title="设置">
          <Menu.Item key="6">用户信息</Menu.Item>
          <Menu.Item key="7">权限设置</Menu.Item>
        </Menu.ItemGroup>

      </Menu>
    );
  }
}

export default Sider;