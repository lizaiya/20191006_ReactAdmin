import React, { Component } from 'react';
import './login.less'
import logo from './images/logo.png'
import { Form, Icon, Input, Button } from 'antd';
const Item=Form.Item
class Login extends Component {
    handleSubmit=(event)=>{
        event.preventDefault();
        const form=this.props.form
        // 获取表单输入数据
        form.validateFields((err,values)=>{
            if(!err){
                console.log('提交登录的ajax请求',values)
            }else{
                console.log('校验失败')
            }
        })
    }
    // 对密码进行验证
    validatePwd=(rule, value, callback)=>{
        console.log(rule,value)
        if(!value){
            callback('必须输入密码') // 校验失败，并指定提示的文本
        }else if(value.length<4){
            callback('密码长度不能小于4位') // 校验失败，并指定提示的文本
        }else if(value.length>12){
            callback('密码的长度不能大于12位') // 校验失败，并指定提示的文本
        }else if(/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线组成') // 校验失败，并指定提示的文本
        }else{
            callback() // 校验通过
        }
    }
    render() {
        const form=this.props.form
        const { getFieldDecorator } = form
        const P=(props)=>{
            return <p>{props.text}</p>;
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username',{
                                    // 声明式验证，直接使用别人定义好的验证规则进行验证
                                    rules:[
                                        {required:true,whitespace:true,message:'用户名必须输入'},
                                        {min:4,message:'用户名至少为4位'},
                                        {max:12,message:'用户名最多12位'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数字或下划线组成'},
                                    ]
                                })(
                                    <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号"/>
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',{
                                    // 自定义验证
                                    rules:[
                                        {validator:this.validatePwd}
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="密码"/>
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            <P text="文本"></P>
                        </Item>
                    </Form>
                </section>
            </div>
        );
    }
}
const WrapLogin = Form.create()(Login);
export default WrapLogin;