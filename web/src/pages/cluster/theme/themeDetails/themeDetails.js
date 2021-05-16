import React, { Component } from 'react';
import './themeDetails.scss';
import { Link } from 'react-router-dom';
import { Tabs, Breadcrumb } from 'antd';
import qs from 'qs';
import ThemeOverview from './themeOverview/themeOverview';
import ThemeConfig from './themeConfig/themeConfig';
import ThemeFramework from './themeFramework/themeFramework';
import { connect } from 'react-redux';

const { TabPane } = Tabs;
class ThemeDetails extends Component {
	state = {
		tabsDefaultActiveKey: 'overview',
	};

	componentDidMount() {
		let {
			location: { hash },
		} = this.props;
		this.setState(() => ({
			tabsDefaultActiveKey: hash.substring(1),
		}));
	}

	callback(key) {
		let {
			location: { pathname, search },
			history: { replace },
		} = this.props;
		switch (key) {
			case 'overview':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'message':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'framework':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'config':
				replace(`${pathname}${search}#${key}`);
				break;
			default:
				break;
		}
	}

	render() {
		let {
				location: { search },
				routerParam = { clusterIdStore: '' },
			} = this.props,
			themeName = qs.parse(search.substring(1)).theme_name;
		let { tabsDefaultActiveKey } = this.state,
			{ clusterIdStore } = routerParam;

		return (
			<div className='theme_details'>
				<Breadcrumb separator='>'>
					<Breadcrumb.Item>
						<Link to={`/cluster/${clusterIdStore}/theme`}>所有主题</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{themeName}</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className='theme_title'>{themeName}</h2>
				<div className='theme_content'>
					<Tabs
						key={tabsDefaultActiveKey} // 刷新本页面时加载hash值给defaultActiveKey，否则页面刷新本组件不重载
						defaultActiveKey={tabsDefaultActiveKey}
						onChange={this.callback.bind(this)}
					>
						<TabPane tab='概览' key='overview'>
							<ThemeOverview themeName={themeName} />
						</TabPane>
						<TabPane tab='消息' key='message'>
							222
						</TabPane>
						<TabPane tab='架构' key='framework'>
							<ThemeFramework />
						</TabPane>
						<TabPane tab='配置' key='config'>
							<ThemeConfig />
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({ ...state.routerParamReducer }))(
	ThemeDetails
);
