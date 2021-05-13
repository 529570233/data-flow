import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './cluster.scss';
import { Affix } from 'antd';
import SideMenu from "./sideMenu/sideMenu";
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
	handleClick = (e) => {
		console.log('click ', e);
	};

	render() {
		let {
				match: {
					params: { clusterId: routerParam },
				},
			} = this.props;

		// let routerReg = /(.*)([^\/]+)(.*)/g;
		return (
			<div className='cluster' ref={(node) => (this.clusterContainer = node)}>
				<div className='side_nav_wrap'>
					<Affix target={() => this.clusterContainer} offsetTop={0}>
						<div className='side_nav'>
							<h2 className='cluster_name'>集群1</h2>
							<SideMenu/>
						</div>
					</Affix>
				</div>
				<div className='cluster_content'>
					<Switch>
						<Route
							path={`/cluster/${routerParam}/overview`}
							exact
							component={Overview}
						/>
						<Route
							path={`/cluster/${routerParam}/theme`}
							exact
							component={Theme}
						/>
						<Route
							path={`/cluster/${routerParam}/theme/add`}
							exact
							render={(props) => <AddTheme {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/theme/details/indicator`}
							exact
							render={(props) => <ThemeIndicator {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/theme/details`}
							exact
							render={(props) => <ThemeDetails {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/agent`}
							exact
							component={Agent}
						/>
						<Route
							path={`/cluster/${routerParam}/agent/indicator`}
							exact
							render={(props) => <AgentIndicator {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/agent/details`}
							exact
							render={(props) => <AgentDetails {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/ksqlDb`}
							exact
							component={KsqlDb}
						/>
						<Route
							path={`/cluster/${routerParam}/ksqlDb/details`}
							render={(props) => <KsqlDbDetails {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/consumer`}
							exact
							component={Consumer}
						/>
						<Route
							path={`/cluster/${routerParam}/consumer/details`}
							exact
              render={(props) => <ConsumerDetails {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/clusterSet`}
							exact
							component={ClusterSet}
						/>
						<Route
							path={`/cluster/${routerParam}/connection`}
							exact
							component={Connection}
						/>
						<Route
							path={`/cluster/${routerParam}/connection/details/choose`}
							exact
							render={(props) => <ChooseConnectionCategory {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/connection/details/choose/add`}
							exact
							render={(props) => <AddConnection {...props} />}
						/>
						<Route
							path={`/cluster/${routerParam}/connection/details`}
							exact
							render={(props) => <ConnectionDetails {...props} />}
						/>
						<Redirect
							from={`/cluster/${routerParam}`}
							to={`/cluster/${routerParam}/overview`}
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
