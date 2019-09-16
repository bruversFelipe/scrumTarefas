import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import UploadExtends from "../../Components/UI/Upload";

const { TextArea } = Input;

const styleButton = { marginBottom: "25px" };

const AddNovoProjetoForm = ({ form, submitForm }) => {
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
    <Form onSubmit={submit}>
      <Form.Item>
        <UploadExtends handleValueUpload={handleValueUpload} />
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("nomeProjeto", {
          rules: [
            { required: true, message: "Por favor, digite o nome do projeto" }
          ]
        })(<Input placeholder="Nome" />)}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("descricaoProjeto", {
          rules: [
            {
              required: true,
              message: "Por favor, digite a descrição do projeto"
            }
          ]
        })(<TextArea rows={4} placeholder="Descrição" />)}
      </Form.Item>
      <Button block style={styleButton} type="primary" htmlType="submit">
        Adicionar
      </Button>
    </Form>
  );
};

export default Form.create()(AddNovoProjetoForm);
