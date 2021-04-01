import React, { Component } from 'react';
import './popModel.scss';
import { Button, Modal, List, Icon, Form, Input, Row, Col } from 'antd';
import SearchInput from '../../../../../../components/searchInput/searchInput';
import CheckBox from '../../../../../../components/checkBox/checkBox';

class PopModel extends Component {
	state = {
    confirmLoading: false,
    selectedItemId: null,
		step: 1,
		themeList: [
			{ id: 1, name: 'key1', theme: 'theme1' },
			{ id: 2, name: 'key2', theme: 'theme2' },
			{ id: 3, name: 'key3', theme: 'theme3' },
			{ id: 4, name: 'key4', theme: 'theme4' },
		],
	};

	// handleOk = () => {
	// 	this.setState({
	// 		confirmLoading: true,
	// 	});
	// 	let { showModal } = this.props;
	// 	setTimeout(() => {
	// 		this.setState({
	// 			confirmLoading: false,
	// 		});
	// 		showModal(false);
	// 	}, 2000);
	// };
	// handleCancel = () => {
	// 	let { showModal } = this.props;
	// 	showModal(false);
	// };
	onChange(e) {
		console.log(`checked = ${e.target.checked}`);
	}
	nextStep(id) {
		this.setState(() => ({
      step: 2,
      selectedItemId: id
		}));
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	render() {
		let { confirmLoading, step, selectedItemId, themeList } = this.state;
		let {
			isVisible,
			showModal,
			form: { getFieldDecorator },
		} = this.props;

    let selectedItem = themeList.filter(item => item.id === selectedItemId);
    console.log(selectedItem)
		return (
			<Modal
				title='新建ksqlDB流'
				visible={isVisible}
				// onOk={this.handleOk}
				confirmLoading={confirmLoading}
				onCancel={() => showModal(false)}
				footer={
					<Button type='default' onClick={() => showModal(false)}>
						取消
					</Button>
				}
			>
				<div className='add_stream_model'>
					<h4>选择包含流中所需数据的主题</h4>
					<p className='step'>步骤{step}/2</p>
					{step === 1 ? (
						<>
							<div className='select_theme'>
								<div className='search_checkbox'>
									<div className='search_box'>
										<SearchInput placeholder='搜索' width={200} />
									</div>
									<div className='check_box'>
										<CheckBox label='显示内部主题' onChange={this.onChange} />
									</div>
								</div>
							</div>
							<div className='themes'>
								<List
									size='small'
									dataSource={themeList}
									renderItem={(item) => (
										<List.Item key={item.id} onClick={() => this.nextStep(item.id)}>
											<List.Item.Meta description={item.name} />
											<Icon type='right' />
										</List.Item>
									)}
								></List>
							</div>
						</>
					) : (
						<div className='second_step'>
							<Row>
								<Col span={16}>
									<Form
										onSubmit={this.handleSubmit}
										className='second_step_form'
									>
										<Form.Item label='分层存储S3存储桶'>
											{getFieldDecorator('layer_storage_s3')(
												<Input placeholder='' style={{ width: '100%' }} />
											)}
										</Form.Item>
									</Form>
								</Col>
								<Col span={8}>
									<div className='query_existing_stream'>
										<h4 className='query_existing_stream_title'>查询现有流</h4>
										<ul className='existing_stream'>
											<li className='existing_stream_item'>
												KSQL_PROCESSING_LOG
											</li>
											<li className='existing_stream_item'>
												KSQL_PROCESSING_LOG
											</li>
											<li className='existing_stream_item'>
												KSQL_PROCESSING_LOG
											</li>
										</ul>
									</div>
								</Col>
							</Row>
						</div>
					)}
				</div>
			</Modal>
		);
	}
}

export default Form.create({ name: 'addStream' })(PopModel);
