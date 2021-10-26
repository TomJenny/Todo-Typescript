import { CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tooltip } from "antd";
import { useContext } from "react";
import { storeContext } from "../../context/Context";
import * as S from "./TodoItemElement";

type TodoItemProps = {
  updateTodoAction: (item: Todo) => void;
  deleteTodoAction: (item: Todo) => void;
};

const TodoItem = ({ deleteTodoAction, updateTodoAction }: TodoItemProps) => {
  const { todoReducer } = useContext(storeContext);
  const [todosState] = todoReducer;

  return (
    <S.TodoItemContainer>
      {todosState?.todos.reverse().map((item: Todo, index: number) => {
        return (
          <S.WrapperStyled key={index}>
            <Row justify="space-between">
              <S.TaskNameStyled level={3} status={item.status.toString()}>
                {item.name}
              </S.TaskNameStyled>
              <Col>
                <Tooltip title="Done Task">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<CheckCircleOutlined />}
                    size="large"
                    onClick={() => updateTodoAction(item)}
                    style={{ margin: "5px" }}
                  />
                </Tooltip>
                <Tooltip title="Delete Task">
                  <Button
                    type="primary"
                    danger
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size="large"
                    onClick={() => deleteTodoAction(item)}
                    style={{ margin: "5px" }}
                  />
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <S.TaskDescriptionStyled
                style={{ color: "white" }}
                status={item.status.toString()}
              >
                {item.description}
              </S.TaskDescriptionStyled>
            </Row>
          </S.WrapperStyled>
        );
      })}
    </S.TodoItemContainer>
  );
};

export default TodoItem;
