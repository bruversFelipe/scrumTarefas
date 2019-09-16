import styled from "styled-components";
import Modal from "antd/lib/modal";

const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    box-shadow: 0 0 10px ${props => props.theme.shadow};
    border-radius: 0;
    background: ${props => props.theme.modal.background};
    .ant-modal-header,
    .ant-modal-body {
      border-radius: 0;
    }

    .ant-modal-header {
      background: ${props => props.theme.modal.header};
    }

    .ant-modal-title {
      font-weight: 400;
      color: ${props => props.theme.modal.color};
    }
  }
`;

export default ModalWrapper;
