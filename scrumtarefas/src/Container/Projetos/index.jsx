import React from "react";
import Card from "antd/lib/card";
import Icon from "antd/lib/icon";
import { Row, Col } from "antd/lib/grid";
import AddNovoProjeto from "../AddNovoProjeto";
import history from "../../Utils/createHistory";

const { Meta } = Card;

const projects = [
  {
    key: 1,
    title: "Cursinho Cristo Rei",
    description: "Tarefas do meu Cursinho",
    bgFundo: "http://dev.w4e.com.br/felipe/bg-neve.jpg"
  },
  {
    key: 2,
    title: "Meu serviço",
    description: "Freelancers à fazer",
    bgFundo: "http://dev.w4e.com.br/felipe/sky.jpg"
  }
];

const Projetos = () => {
  const entrarMeuProjeto = () => {
    history.push("/meus-projetos/editar");
  };
  return (
    <Row type="flex" gutter={32}>
      {projects.map(item => (
        <Col span={6} key={item.key}>
          <Card
            cover={<img src={item.bgFundo} alt="" />}
            bordered={false}
            hoverable
            onClick={entrarMeuProjeto}
          >
            <div className="overlay">
              <Icon type="form" />
            </div>
            <Meta title={item.title} description={item.description} />
          </Card>
        </Col>
      ))}
      <Col span={6}>
        <AddNovoProjeto />
      </Col>
    </Row>
  );
};
export default Projetos;
