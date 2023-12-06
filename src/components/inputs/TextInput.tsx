import {BaseFormItemInterface} from "../../utils/interfaces/FormInterfaces.ts";
import {Form, Input} from "antd";

function TextInput(props:BaseFormItemInterface) {
    return (
        <Form.Item {...props.formItemProps}>
            <Input />
        </Form.Item>
    );
}

export default TextInput;