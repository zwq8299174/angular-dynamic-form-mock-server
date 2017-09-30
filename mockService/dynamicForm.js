const Mock = require('mockjs');
exports.title = '动态表单' // 必填

exports.request = {}

exports.response = {
	'resultCode': '', // 返回码 [0000]成功 [9999]其他错误
	'resultDesc': '', // 返回描述
	'data': []
}

// 下面模拟随机返回的样本数据
exports.service = function*(next) {
		let v = Math.random();
		let rb = this.request.body;
		if(v < 0.05) {
			this.state.code = '9999';
			this.state.message = '其他错误';
		} else {
			this.state.body = Mock.mock({
					'data|3-10': [{
						'id|+1': 1000,
						'name': '@cword(4)',
						'items': [{
								'itemId+1': 10000,
								itemkey: 'queryInfo',
								itemName: '查询信息',
								type: 'checkbox',
								'conditions': [{
										id: 0,
										display: '全选',
										val: 'all'
									}, {
										id: 1,
										display: '手机号码',
										val: 'mobile'
									},
									{
										id: 2,
										display: 'uid',
										val: 'uid'
									},
									{
										id: 3,
										display: '苹果设备号',
										val: 'iosId'
									},
									{
										id: 4,
										display: '安卓设备号',
										val: 'androidId'
									},
									{
										id: 5,
										display: '用户名',
										val: 'userName'
									},
									{
										id: 6,
										display: '昵称',
										val: 'nickName'
									},
									{
										id: 7,
										display: '设备型号',
										val: 'unitType'
									},
									{
										id: 8,
										display: '性别',
										val: 'gender'
									}
								]
							},
							{
								itemId: 10002,
								itemkey: 'loginDate',
								itemName: '登录时间',
								type: 'radio',
								'conditions': [{
										id: 0,
										display: '今天',
										val: 'today'
									}, {
										id: 1,
										display: '昨天',
										val: 'yestoady'
									}, {
										id: 2,
										display: '近3天',
										val: 'last3D'
									},
									{
										id: 3,
										display: '近7天',
										val: 'last7D'
									},
									{
										id: 4,
										display: '近14天',
										val: 'last14D'
									},
									{
										id: 5,
										display: '近30天',
										val: 'last30D'
									},
									{
										id: 6,
										display: '近60天',
										val: 'last30D'
									}
								]
							},
							{
								itemId: 10003,
								itemkey: 'loginTimes',
								itemName: '登录频率',
								type: 'checkboxInput',
								'conditions': [{
										id: 1,
										display: '不限',
										val: null
									},
									{
										id: 2,
										display: '1次/周',
										val: '1Week'
									},
									{
										id: 3,
										display: '2-10次/周',
										val: '2-10Week'
									},
									{
										id: 4,
										display: '10-30次/周',
										val: '10-50Week'
									},
									{
										id: 5,
										display: '30-50次/周',
										val: '>50Week'
									},
									{
										id: 6,
										display: '50-80次/周',
										val: '>50Week'
									},
									{
										id: 7,
										display: '80-100次/周',
										val: '>50Week'
									},
									{
										id: 8,
										display: '>100次/周',
										val: '>50Week'
									}
								]
							},
							{
								itemId: 10004,
								itemkey: 'payDate',
								itemName: '付费时间',
								type: 'radioDate',
								conditions: [{
										id: 1,
										display: '近3天',
										val: 'last3D'
									},
									{
										id: 2,
										display: '近7天',
										val: 'last7D'
									},
									{
										id: 3,
										display: '近14天',
										val: 'last14D'
									},
									{
										id: 4,
										display: '近30天',
										val: 'last30D'
									}
								]
							},
							{
								itemId: 10005,
								itemkey: 'payTimes',
								itemName: '付费频率',
								type: 'checkboxInput',
								'conditions': [{
										id: 1,
										display: '不限',
										val: null
									},
									{
										id: 2,
										display: '1次/周',
										val: '1Week'
									},
									{
										id: 3,
										display: '2-10次/周',
										val: '2-10Week'
									},
									{
										id: 4,
										display: '10-30次/周',
										val: '10-50Week'
									},
									{
										id: 5,
										display: '30-50次/周',
										val: '>50Week'
									},
									{
										id: 6,
										display: '50-80次/周',
										val: '>50Week'
									},
									{
										id: 7,
										display: '80-100次/周',
										val: '>50Week'
									},
									{
										id: 8,
										display: '>100次/周',
										val: '>50Week'
									}
								]
							},
							{
								itemId: 10006,
								itemkey: 'payTimes',
								itemName: '付费金额',
								type: 'checkboxInput',
								'conditions': [{
										id: 1,
										display: '不限',
										val: null
									},
									{
										id: 2,
										display: '免费用户',
										val: '@word(6)'
									},
									{
										id: 3,
										display: '0-100',
										val: '@word(6)'
									},
									{
										id: 4,
										display: '100-500',
										val: '@word(6)'
									},
									{
										id: 5,
										display: '500-1000',
										val: '@word(6)'
									},
									{
										id: 6,
										display: '1000-5000',
										val: '@word(6)'
									},
									{
										id: 7,
										display: '5000-1万',
										val: '@word(6)'
									},
									{
										id: 8,
										display: '>1万',
										val: '@word(6)'
									}
								]
							},
							{
								itemId: 10007,
								itemkey: 'province',
								itemName: '省份',
								type: 'select',
								'conditions|20': [{
									'id|+1': 110000,
									'display': '@province',
									'val': '@word(8)'
								}]
							},
							{
								itemId: 10008,
								itemkey: 'input',
								itemName: '其他的输入',
								type: 'input',
								conditions: []
							}
						]
					}]
				})
			}
			yield next;
		};