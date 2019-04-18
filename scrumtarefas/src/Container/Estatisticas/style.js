import styled from "styled-components";

const EstatisticasWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  color: ${props => props.theme.title.color};

  i {
    cursor: pointer;
  }
`;

export default EstatisticasWrapper;
