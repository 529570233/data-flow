import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ksqlDbDetailsStreams.scss';
import { Button, Table, Row, Col } from 'antd';
import SearchInput from '../../../../../components/searchInput/searchInput';

const { Column, ColumnGroup } = Table;
class KsqlDbDetailsStreams extends Component {
	state = {
		tableData: [
			{
				key: '1',
				name: '主题1',
				copy_area: '0 of 1',
				async_follower: '0 of 1',
				async_observer: '0 of 1',
				production: '- -',
			},
			{
				key: '2',
				name: '主题2',
				copy_area: '0 of 1',
				async_follower: '0 of 1',
				async_observer: '0 of 1',
				production: '0B',
			},
			{
				key: '3',
				name: '主题3',
				copy_area: '0 of 5',
				async_follower: '0 of 5',
				async_observer: '0 of 0',
				production: '0B',
			},
		],
	};
	render() {
		let { tableData } = this.state;
		return (
			<div className='ksqlDb_details_streams'>
				<div className='actions'>
					<Row>
						<Col span={6}>
							<SearchInput placeholder='搜索' />
						</Col>
						<Col span={18}>
							<div className='add_streams_box'>
								<Button type='primary' icon='plus'>
									添加Stream
								</Button>
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
								to={`/cluster/ksqlDb/${text}?id=${record.key}&name=${text}`}
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

export default KsqlDbDetailsStreams;
