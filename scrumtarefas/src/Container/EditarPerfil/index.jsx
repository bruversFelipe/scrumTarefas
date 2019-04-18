import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Upload from "../../Components/UI/Upload";

const styleButton = { marginBottom: "25px" };

const EditarPerfil = ({ form, submitForm, closeNovaConta }) => {
  const [valueImg, setValueImg] = useState({});
  const submit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const obj = {
          valueImg,
          ...values
        };
        submitForm(obj);
      }
    });
  };

  const handleValueUpload = value => {
    setValueImg(value);
  };
  return (
    <Form onSubmit={submit} className="login-form">
      <Form.Item>
        <Upload handleValueUpload={handleValueUpload} />
      </Form.Item>
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
        {form.getFieldDecorator("senha", {
          rules: [{ required: true, message: "Por favor, digite sua senha!" }]
        })(<Input type="password" placeholder="Senha" />)}
      </Form.Item>
      <Button block style={styleButton} type="primary" htmlType="submit">
        Salvar
      </Button>
    </Form>
  );
};

export default Form.create()(EditarPerfil);
