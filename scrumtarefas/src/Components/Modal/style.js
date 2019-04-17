import styled from "styled-components";
import Modal from "antd/lib/modal";

const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    box-shadow: 0 0 10px ${props => props.theme.shadow};
    border-radius: 0;
    .ant-modal-header,
    .ant-modal-body {
      border-radius: 0;
    }
    .ant-modal-title {
      font-weight: 400;
    }
  }
`;

export default ModalWrapper;
