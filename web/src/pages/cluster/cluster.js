import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './cluster.scss';
import { Affix } from 'antd';
import SideMenu from './sideMenu/sideMenu';
import Overview from './overview/overview';
import Agent from './agent/agent';
import Theme from './theme/theme';
import Connection from './connection/connection';
import KsqlDb from './ksqlDb/ksqlDb';
import Consumer from './consumer/consumer';
import ClusterSet from './clusterSet/clusterSet';
import KsqlDbDetails from './ksqlDb/ksqlDbDetails/ksqlDbDetails';
import AgentDetails from './agent/agentDetails/agentDetails';
import AgentIndicator from './agent/agentIndicator/agentIndicator';
import ThemeDetails from './theme/themeDetails/themeDetails';
import ConnectionDetails from './connection/connectionDetails/connectionDetails';
import ChooseConnectionCategory from './connection/connectionDetails/chooseConnectionCategory/chooseConnectionCategory';
import AddConnection from './connection/connectionDetails/chooseConnectionCategory/addConnection/addConnection';
import ConsumerDetails from './consumer/consumerDetails/consumerDetails';
import ThemeIndicator from './theme/themeDetails/themeOverview/themeIndicator/themeIndicator';
import AddTheme from './theme/addTheme/addTheme';
import { connect } from 'react-redux';

class Cluster extends Component {
	componentDidUpdate() {
		// 输入错误的cluster路由时(如：/cluster/asd)，跳转到主页
		let {
			match: {
				params: { clusterId },
			},
			routerParam = { clusterIdStore: '' },
		} = this.props;
		let { clusterIdStore } = routerParam;

		if (clusterId !== clusterIdStore) {
			this.props.history.push('/home');
		}
	}

	render() {
		let {
			match: {
				params: { clusterId: clusterIdRouter },
			},
			routerParam = { clusterNameStore: '' }, // 先赋默认值，因为cluster页面刷新时，由于异步请求接口，数据尚未保存到store中
		} = this.props;
		let { clusterNameStore } = routerParam;
		// let routerReg = /(.*)([^\/]+)(.*)/g;

		return (
			<div className='cluster' ref={(node) => (this.clusterContainer = node)}>
				<div className='side_nav_wrap'>
					<Affix target={() => this.clusterContainer} offsetTop={0}>
						<div className='side_nav'>
							<h2 className='cluster_name'>{clusterNameStore}</h2>
							<SideMenu />
						</div>
					</Affix>
				</div>
				<div className='cluster_content'>
					<Switch>
						<Route
							path={`/cluster/${clusterIdRouter}/overview`}
							exact
							component={Overview}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/theme`}
							exact
							component={Theme}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/theme/add`}
							exact
							render={(props) => <AddTheme {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/theme/details/indicator`}
							exact
							render={(props) => <ThemeIndicator {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/theme/details`}
							exact
							render={(props) => <ThemeDetails {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/agent`}
							exact
							component={Agent}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/agent/indicator`}
							exact
							render={(props) => <AgentIndicator {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/agent/details`}
							exact
							render={(props) => <AgentDetails {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/ksqlDb`}
							exact
							component={KsqlDb}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/ksqlDb/details`}
							render={(props) => <KsqlDbDetails {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/consumer`}
							exact
							component={Consumer}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/consumer/details`}
							exact
							render={(props) => <ConsumerDetails {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/clusterSet`}
							exact
							component={ClusterSet}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/connection`}
							exact
							component={Connection}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/connection/details/choose`}
							exact
							render={(props) => <ChooseConnectionCategory {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/connection/details/choose/add`}
							exact
							render={(props) => <AddConnection {...props} />}
						/>
						<Route
							path={`/cluster/${clusterIdRouter}/connection/details`}
							exact
							render={(props) => <ConnectionDetails {...props} />}
						/>
						<Redirect
							from={`/cluster/${clusterIdRouter}`}
							to={`/cluster/${clusterIdRouter}/overview`}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({ ...state.routerParamReducer }))(
	withRouter(Cluster)
);
