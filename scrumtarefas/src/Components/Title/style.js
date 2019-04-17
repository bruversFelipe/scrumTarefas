import styled from "styled-components";

const TitleWrapper = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.title.color};
  display: flex;
  align-items: center;
  margin: 12px 0px 40px;
  white-space: nowrap;

  span {
    white-space: nowrap;
  }

  :before {
    content: "";
    width: 5px;
    height: 40px;
    background-color: ${props => props.theme.title.detalhes};
    display: flex;
    margin: 0 15px 0 0;
  }

  :after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.title.detalhes};
    display: flex;
    margin: 0 0 0 15px;
  }
`;

export default TitleWrapper;
