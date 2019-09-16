import React, { useState } from "react";
import AddNovoProjetoWrapper from "./style";
import Icon from "antd/lib/icon";
import Modal from "../../Components/Modal";
import Loading from "../../Components/Loading";

const AddNovoProjetoForm = React.lazy(() => import("./AddNovoProjetoForm"));

const AddNovoProjeto = () => {
  const [visible, setVisible] = useState(false);

  const openNewProjeto = () => {
    setVisible(true);
  };

  const cancelProjeto = () => {
    setVisible(false);
  };

  const submitNovoProjeto = values => {
    console.log("values", values);
    cancelProjeto();
  };
  return (
    <React.Fragment>
      <AddNovoProjetoWrapper onClick={openNewProjeto}>
        <Icon type="plus-circle" />
      </AddNovoProjetoWrapper>
      <Modal
        title="Adicionar Novo Projeto"
        width={600}
        footer={null}
        visible={visible}
        onCancel={cancelProjeto}
      >
        <React.Suspense fallback={<Loading loading />}>
          <AddNovoProjetoForm submitForm={submitNovoProjeto} />
        </React.Suspense>
      </Modal>
    </React.Fragment>
  );
};
export default AddNovoProjeto;
