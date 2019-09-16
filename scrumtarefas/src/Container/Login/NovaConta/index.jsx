import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

const styleButton = { marginBottom: "25px" };

const NovaConta = ({ form, submitForm, closeNovaConta }) => {
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
        {form.getFieldDecorator("nomePessoa", {
          rules: [{ required: true, message: "Por favor, digite o seu nome" }]
        })(<Input placeholder="Nome" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("email", {
          rules: [{ required: true, message: "Por favor, digite o seu e-mail" }]
        })(<Input placeholder="E-mail" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("usuario", {
          rules: [{ required: true, message: "Por favor, digite o usuário" }]
        })(<Input placeholder="Usuário" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("senha", {
          rules: [{ required: true, message: "Por favor, digite sua senha!" }]
        })(<Input type="password" placeholder="Senha" />)}
      </Form.Item>
      <Button block style={styleButton} type="primary" htmlType="submit">
        Criar
      </Button>
      <span className="singup">
        Já possui uma conta? <span onClick={closeNovaConta}>Voltar!</span>
      </span>
    </Form>
  );
};

export default Form.create()(NovaConta);
