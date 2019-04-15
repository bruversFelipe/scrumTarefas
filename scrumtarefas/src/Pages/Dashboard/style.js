import styled from "styled-components";

const DashboardWrapper = styled.div`
  .ant-card {
    box-shadow: 0px 0px 10px ${props => props.theme.shadow};
    border-radius: 10px;
    position: relative;

    .ant-card-cover {
      img {
        border-radius: 10px 10px 0 0;
        min-height: 160px;
        max-height: 160px;
      }
    }

    .overlay {
      display: none;
    }

    :hover {
      .overlay {
        display: flex;
        background: rgba(255, 255, 255, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #fff;
      }
    }
  }
`;

export default DashboardWrapper;
