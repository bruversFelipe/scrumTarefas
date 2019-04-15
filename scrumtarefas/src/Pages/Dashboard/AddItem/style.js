import styled from "styled-components";

const AddItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 10px dashed ${props => props.theme.addItem};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  i {
    font-size: 50px;
    color: ${props => props.theme.addItem};
  }
`;

export default AddItemWrapper;
