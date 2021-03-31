import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './ksqlDbDetails.scss';
import qs from 'qs';
import { Tabs, Breadcrumb } from 'antd';
import KsqlDbDetailsEdit from './ksqlDbDetailsEdit/ksqlDbDetailsEdit';
import KsqlDbDetailsStreams from './ksqlDbDetailsStreams/ksqlDbDetailsStreams';

const { TabPane } = Tabs;
class KsqlDbDetails extends Component {
	callback(key) {
		console.log(key);
	}
	render() {
		let {
			location: { search },
		} = this.props;
		let ksqlDbName = qs.parse(search.substring(1)).name;

		return (
			<div className='KsqlDB_details'>
				<Breadcrumb separator='>'>
					<Breadcrumb.Item>
						<Link to='/cluster/ksqlDb'>KSQLDB</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{ksqlDbName}</Breadcrumb.Item>
				</Breadcrumb>
				<h2 className='ksqlDB_title'>{ksqlDbName}</h2>
				<div className='ksqlDB_content'>
					<Tabs defaultActiveKey='1' onChange={this.callback}>
						<TabPane tab='编辑' key='1'>
							<KsqlDbDetailsEdit />
						</TabPane>
						<TabPane tab='flow' key='2'>
							222
						</TabPane>
						<TabPane tab='streams' key='3'>
							<KsqlDbDetailsStreams />
						</TabPane>
						<TabPane tab='表格' key='4'>
							444
						</TabPane>
						<TabPane tab='运行中查询' key='5'>
							555
						</TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default withRouter(KsqlDbDetails);
