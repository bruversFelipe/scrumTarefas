import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";

const formOpitons = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px"
};

const colorIcon = { color: "rgba(0,0,0,.25)" };

const LoginForm = ({ form, submitForm }) => {
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
      <div style={formOpitons}>
        <Form.Item>
          {form.getFieldDecorator("lembrarme", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Lembrar-me</Checkbox>)}
        </Form.Item>
      </div>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(LoginForm);
