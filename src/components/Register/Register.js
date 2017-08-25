/*
* @Author: FIyingIdeal
* @Date:   2017-05-06 19:06:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-25 15:52:52
*/

'use strict';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import * as RegisterActions from '../../redux/register/registerAction';

import './Register.css';

const FormItem = Form.Item;

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.actions.regist(values);
            } else {
                console.log("error", err);
            }
        });
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('输入两次密码不一致！');
        } else {
            callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ 
            confirmDirty: this.state.confirmDirty || !!value
        });
    }

	render() {

        const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24},
				sm: { span: 14},
			}
		};

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        };

		return (
			<Form onSubmit={ this.handleSubmit }>
				<FormItem 
					{ ...formItemLayout }
					label = '用户名'
					hasFeedback
				>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: '请输入用户名！', whitespace: true }],
					})(
						<Input />
					)}
				</FormItem>

				<FormItem
					{ ...formItemLayout }
					label = '密码'
					hasFeedback
				>
					{getFieldDecorator('password', {
						rules: [{
							required: true, message: '请输入密码'
						}, {
							validator: this.checkConfirm
						}],
					})(
						<Input type='password' onBlur={ this.handleConfirmBlur } />
					)}
				</FormItem>

				<FormItem
					{ ...formItemLayout }
					label = '确认密码'
					hasFeedback
				>
					{getFieldDecorator('confirm', {
						rules: [{
							required: true, message: '请确认密码'
						}, {
							validator: this.checkPassword
						}],
					})(
                        <Input type='password' onBlur={ this.handleConfirmBlur } />
					)}
				</FormItem>

                <FormItem
                    { ...formItemLayout }
                    label = '邮箱'
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '邮箱格式错误'
                        }, {
                            required: true, message: '请输入邮箱'
                        }]
                    })(
                        <Input/>
                    )}
                </FormItem>

                <FormItem { ...tailFormItemLayout }>
                    <Button type='primary' htmlType='submit' size='large'>Register</Button>
                </FormItem>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create()(RegisterForm);

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(RegisterActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(WrappedRegistrationForm);