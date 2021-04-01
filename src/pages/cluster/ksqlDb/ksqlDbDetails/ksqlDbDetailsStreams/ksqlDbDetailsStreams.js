import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ksqlDbDetailsStreams.scss';
import qs from 'qs';
import { Button, Table, Row, Col } from 'antd';
import SearchInput from '../../../../../components/searchInput/searchInput';
import PopModel from './popModel/popModel';

const { Column, ColumnGroup } = Table;
class KsqlDbDetailsStreams extends Component {
	state = {
		tableData: [
			{
				key: '1',
				name: 'aaa',
				copy_area: '0 of 1',
				async_follower: '0 of 1',
				async_observer: '0 of 1',
				production: '- -',
			},
			{
				key: '2',
				name: 'bbb',
				copy_area: '0 of 1',
				async_follower: '0 of 1',
				async_observer: '0 of 1',
				production: '0B',
			},
			{
				key: '3',
				name: 'ccc',
				copy_area: '0 of 5',
				async_follower: '0 of 5',
				async_observer: '0 of 0',
				production: '0B',
			},
		],
		visible: false
	};

	showModal(isShow) {
		this.setState(() => ({
			visible: isShow,
		}));
		// this.popModelComp.forceUpdate();
	}

	render() {
		let { tableData } = this.state,
			{
				location: { search },
			} = this.props,
			ksqlDbName = qs.parse(search.substring(1)).ksqlDb_name;

		let { visible } = this.state;
		return (
			<div className='ksqlDb_details_streams'>
				<div className='actions'>
					<Row>
						<Col span={6}>
							<SearchInput placeholder='搜索' />
						</Col>
						<Col span={18}>
							<div className='add_streams_box'>
								<Button
									type='primary'
									icon='plus'
									onClick={() => this.showModal(true)}
								>
									添加Stream
								</Button>
								<PopModel
									isVisible={visible}
									showModal={this.showModal.bind(this)}
								/>
							</div>
						</Col>
					</Row>
				</div>
				<Table dataSource={tableData} bordered>
					<Column
						title='主题名称'
						dataIndex='name'
						key='name'
						render={(text, record) => (
							<Link
								to={`/cluster/ksqlDb/${ksqlDbName}/${text}?ksqlDb_name=${ksqlDbName}&ksqlDb_stream_name=${text}`}
							>
								{text}
							</Link>
						)}
					/>
					<ColumnGroup title='有效性'>
						<Column title='复制分区' dataIndex='copy_area' key='copy_area' />
						<Column
							title='非同步跟随者'
							dataIndex='async_follower'
							key='async_follower'
						/>
						<Column
							title='非同步观察者'
							dataIndex='async_observer'
							key='async_observer'
						/>
					</ColumnGroup>
					<Column
						title='字节/秒 生产'
						dataIndex='production'
						key='production'
					/>
				</Table>
			</div>
		);
	}
}

export default withRouter(KsqlDbDetailsStreams);
