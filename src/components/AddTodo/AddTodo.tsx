import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Tooltip } from "antd";
import { WrapperStyled } from "../TodoItem/TodoItemElement";

type AddTodoProps = {
  addTodoAction: (item: Todo) => void;
};

const AddTodo = ({ addTodoAction }: AddTodoProps) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    addTodoAction(values);
  };

  return (
    <WrapperStyled>
      <Form onFinish={onFinish}>
        <Row>
          <Form.Item
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 15 }}
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your task Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 15 }}
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your task description" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Tooltip title="Add Task">
              <Button
                type="primary"
                htmlType="submit"
                danger
                icon={<PlusOutlined />}
                size="large"
                style={{ margin: "0 5px", height: "32px" }}
              />
            </Tooltip>
          </Form.Item>
        </Row>
      </Form>
    </WrapperStyled>
  );
};

export default AddTodo;
