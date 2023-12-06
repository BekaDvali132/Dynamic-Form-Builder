import { FunctionComponent } from 'react';
import {SelectFormItemInterface} from "../../utils/interfaces/FormInterfaces.ts";
import {Form, Select} from "antd";


type Props = SelectFormItemInterface;

const SelectInput: FunctionComponent<Props> = (props) => {
  return (
      <Form.Item {...props.formItemProps}>
          <Select {...props.inputProps} />
      </Form.Item>
  );
};

export default SelectInput;
