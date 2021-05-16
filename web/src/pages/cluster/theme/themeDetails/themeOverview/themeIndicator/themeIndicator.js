import React, { Component } from 'react';
import './themeIndicator.scss';
import { Link } from 'react-router-dom';
import { Tabs, Breadcrumb } from 'antd';
import ThemeIndicatorProduction from './themeIndicatorProduction/themeIndicatorProduction';
import ThemeIndicatorConsume from './themeIndicatorConsume/themeIndicatorConsume';
import ThemeIndicatorAvailability from './themeIndicatorAvailability/themeIndicatorAvailability';
import qs from 'qs';
import { connect } from 'react-redux';

const { TabPane } = Tabs;
class ThemeIndicator extends Component {
	state = {
		tabsDefaultActiveKey: 'production',
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
			case 'production':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'consume':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'availability':
				replace(`${pathname}${search}#${key}`);
				break;
			case 'consumerLag':
				replace(`${pathname}${search}#${key}`);
				break;
			default:
				break;
		}
	}

	render() {
		let {
			routerParam = { clusterIdStore: '' },
			location: { search },
		} = this.props;
		let themeName = qs.parse(search.substring(1)).theme_name,
			{ tabsDefaultActiveKey } = this.state,
			{ clusterIdStore } = routerParam;

		return (
			<div className='theme_indicator'>
				<Breadcrumb separator='>'>
					<Breadcrumb.Item>
						<Link to={`/cluster/${clusterIdStore}/theme`}>所有主题</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<Link
							to={`/cluster/${clusterIdStore}/theme/details?theme_name=${themeName}`}
						>
							{themeName}
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>指标</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className='theme_title'>指标</h2>
				<div className='theme_content'>
					<Tabs
						key={tabsDefaultActiveKey} // 刷新本页面时加载hash值给defaultActiveKey，否则页面刷新本组件不重载
						defaultActiveKey={tabsDefaultActiveKey}
						onChange={this.callback.bind(this)}
					>
						<TabPane tab='生产' key='production'>
							<ThemeIndicatorProduction />
						</TabPane>
						<TabPane tab='消费' key='consume'>
							<ThemeIndicatorConsume />
						</TabPane>
						<TabPane tab='可用性' key='availability'>
							<ThemeIndicatorAvailability />
						</TabPane>
						<TabPane tab='消费者滞后' key='consumerLag'>
							消费者滞后...
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({ ...state.routerParamReducer }))(
	ThemeIndicator
);
