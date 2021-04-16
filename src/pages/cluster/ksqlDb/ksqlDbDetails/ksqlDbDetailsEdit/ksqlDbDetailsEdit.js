import React, { Component } from 'react';
import './ksqlDbDetailsEdit.scss';
import { Row, Col, Tree } from 'antd';
import SearchInput from '@/components/searchInput/searchInput';

const { TreeNode } = Tree;
class KsqlDbDetailsEdit extends Component {
	state = {
		dataList: [
			{
				key: 'dataStructure',
				name: '数据结构',
				value: 'xxx',
			},
			{
				key: 'messageTotal',
				name: '消息总量',
				value: 'xxx',
			},
			{
				key: 'messageTime',
				name: '消息/秒',
				value: 'xxx',
			},
			{
				key: 'messageByte',
				name: '消息字节总数',
				value: 'xxx',
			},
			{
				key: 'messageField',
				name: '消息字段',
				value: 'xxx',
			},
		],
		treeData: [
			{
				title: '0-0',
				key: '0-0',
				children: [
					{
						title: '0-0-0',
						key: '0-0-0',
						children: [
							{ title: '0-0-0-0', key: '0-0-0-0' },
							{ title: '0-0-0-1', key: '0-0-0-1' },
							{ title: '0-0-0-2', key: '0-0-0-2' },
						],
					},
					{
						title: '0-0-1',
						key: '0-0-1',
						children: [
							{ title: '0-0-1-0', key: '0-0-1-0' },
							{ title: '0-0-1-1', key: '0-0-1-1' },
							{ title: '0-0-1-2', key: '0-0-1-2' },
						],
					},
					{
						title: '0-0-2',
						key: '0-0-2',
					},
				],
			},
			{
				title: '0-1',
				key: '0-1',
				children: [
					{ title: '0-1-0-0', key: '0-1-0-0' },
					{ title: '0-1-0-1', key: '0-1-0-1' },
					{ title: '0-1-0-2', key: '0-1-0-2' },
				],
			},
			{
				title: '0-2',
				key: '0-2',
			},
		],
	};

	renderTreeNodes(data) {
		return data.map((item) => {
			let { key, title, children } = item;
			if (children) {
				return (
					<TreeNode title={title} key={key} dataRef={item}>
						{this.renderTreeNodes(children)}
					</TreeNode>
				);
			}
			return <TreeNode key={key} {...item} />;
		});
	}

	render() {
		let { dataList, treeData } = this.state;
		return (
			<div className='ksqlDb_details_edit'>
				<Row>
					<Col className='gutter-row' span={17}>
						<div className='data_area'>
							<div className='query'>...</div>
							<div className='data_dispaly'>
								<Row gutter={10}>
									<Col className='gutter-row' span={6}>
										<ul className='data_list'>
											{dataList.map((item) => {
												let { key, name, value } = item;
												return (
													<li className='data_item' key={key}>
														<h4 className='item_name'>{name}</h4>
														<p className='item_value'>{value}</p>
													</li>
												);
											})}
										</ul>
									</Col>
									<Col className='gutter-row' span={18}>
										<div className='data_message'></div>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col className='gutter-row' span={7}>
						<div className='search_stream_table'>
							<SearchInput placeholder='搜索' />
							<h4 className='search_stream_table_title'>所有可用的流和表</h4>
							<div className='stream_table_tree'>
								<Tree defaultExpandedKeys={['0-0-0', '0-0-1']}>
									{this.renderTreeNodes(treeData)}
								</Tree>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default KsqlDbDetailsEdit;
