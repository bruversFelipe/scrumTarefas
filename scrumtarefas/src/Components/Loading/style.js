import styled from "styled-components";

const LoadingWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  .loader {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #ddd;
    border-top: 2px solid #1890ff;
    -webkit-animation: loading 1s linear infinite; /* Safari */
    animation: loading 1s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingWrapper;
