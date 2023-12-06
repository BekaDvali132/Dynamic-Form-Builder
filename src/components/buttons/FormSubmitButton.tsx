import { FunctionComponent } from 'react';
import {Button, Form} from "antd";

const FormSubmitButton: FunctionComponent = () => {
  return (
      <Form.Item>
          <Button htmlType={'submit'}>
              Submit
          </Button>
      </Form.Item>
  );
};

export default FormSubmitButton;
