import { Typography } from "antd";
import styled from "styled-components";

interface TextProps {
  status: string;
}

const { Title } = Typography;

export const TaskNameStyled = styled(Title)`
  text-transform: uppercase;
  color: orange !important;
  text-decoration-line: ${(props: TextProps) =>
    props.status === "true" ? "line-through" : "none"};
`;
export const TaskDescriptionStyled = styled(Typography)`
  text-decoration-line: ${(props: TextProps) =>
    props.status === "true" ? "line-through" : "none"};
`;
export const TodoItemContainer = styled.div`
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

    background-color: #bbb9b9;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #bbb9b9;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;
export const WrapperStyled = styled.div`
  padding: 25px 30px 10px;
  margin: 20px;
  background-color: rgb(68, 68, 68);
  border-radius: 10px;
  .ant-form-item-label > label {
    color: white;
  }
`;
