import styled from "styled-components";

const CountdownWrapper = styled.div`
  width: 100%;
  display: block;
  border-radius: 5px;
  padding: 16px;
  position: relative;
  box-shadow: 2px 4px 10px ${props => props.theme.shadow};
  background: ${props => props.color};

  .count {
    font-size: 2.8rem;
    color: #fff;
    display: block;
    font-weight: 700;
  }

  .title {
    display: block;
    h3 {
      color: #fff;
    }
  }

  .icon-back {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: rgba(0, 0, 0, 0.2);
    font-size: 5rem;
  }
`;

export default CountdownWrapper;
