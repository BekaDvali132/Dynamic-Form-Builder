import { NumberFormItemInterface} from "../../utils/interfaces/FormInterfaces.ts";
import {Form, InputNumber} from "antd";

function NumberInput(props:NumberFormItemInterface) {
    return (
        <Form.Item {...props.formItemProps}>
            <InputNumber {...props.inputProps} />
        </Form.Item>
    );
}

export default NumberInput;