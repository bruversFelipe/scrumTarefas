import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";

const colorIcon = { color: "rgba(0,0,0,.25)" };
const styleButton = { marginBottom: "25px" };

const LoginForm = ({ form, submitForm, showNovaConta }) => {
  const submit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        submitForm(values);
      }
    });
  };
  return (
    <Form onSubmit={submit} className="login-form">
      <Form.Item>
        {form.getFieldDecorator("usuario", {
          rules: [{ required: true, message: "Por favor, digite o usuário" }]
        })(
          <Input
            prefix={<Icon type="user" style={colorIcon} />}
            placeholder="Usuário"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("senha", {
          rules: [{ required: true, message: "Por favor, digite sua senha!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={colorIcon} />}
            type="password"
            placeholder="Senha"
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("lembrarme", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Lembrar-me</Checkbox>)}
      </Form.Item>
      <Button block style={styleButton} type="primary" htmlType="submit">
        Entrar
      </Button>
      <span className="singup">
        Não possui uma conta? <span onClick={showNovaConta}>Crie já!</span>
      </span>
    </Form>
  );
};

export default Form.create()(LoginForm);
