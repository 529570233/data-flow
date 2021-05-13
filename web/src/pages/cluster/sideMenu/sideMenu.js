import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './sideMenu.scss';
import { Menu } from 'antd';

class SideMenu extends Component {
	state = {
		sidemenu: [
			{
				title: '概览',
				icon: 'icon-common',
				link: '/overview',
			},
			{
				title: '代理',
				icon: 'icon-broker',
				link: '/agent',
			},
			{
				title: '主题',
				icon: 'icon-topic',
				link: '/theme',
			},
			{
				title: '连接',
				icon: 'icon-connector',
				link: '/connection',
			},
			{
				title: 'KSQL DB',
				icon: 'icon-ksqldb',
				link: '/ksqlDb',
			},
			{
				title: '消费者',
				icon: 'icon-customer',
				link: '/consumer',
			},
			{
				title: '集群设置',
				icon: 'icon-setting',
				link: '/clusterSet',
			},
		],
	};
	render() {
		let { sidemenu } = this.state,
			{
				location: { pathname },
				match: { url },
			} = this.props;
		let reg = /.+(\/.[^\/]+)/g,
			currentLink = reg.exec(pathname)[1];
console.log(currentLink)
		return (
			<div className='side_menu'>
				<Menu
					onClick={this.handleClick}
					style={{ width: '100%', background: 'none' }}
					defaultSelectedKeys={['0']}
					mode='inline'
				>
					{sidemenu.map((item) => {
						let { title, icon, link } = item;
                        console.log(currentLink === link)
						return (
							<Menu.Item
								key={link}
								className={currentLink === link ? 'ant-menu-item-selected' : ''}
							>
								<NavLink to={url + link} exact>
									<span className={`${icon} side_nav_icon`}></span>
									{title}
								</NavLink>
							</Menu.Item>
						);
					})}
				</Menu>
			</div>
		);
	}
}

export default withRouter(SideMenu);
