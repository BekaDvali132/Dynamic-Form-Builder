import {FunctionComponent} from 'react';
import {FormInputsTableInterface} from "../../../utils/interfaces/TableInterfaces.ts";
import './DynamicForm.scss'
import TextInput from "../../inputs/TextInput.tsx";
import SelectInput from "../../inputs/SelectInput.tsx";
import {Form} from "antd";
import NumberInput from "../../inputs/NumberInput.tsx";

type Props = FormInputsTableInterface;

const DynamicForm: FunctionComponent<Props> = (props) => {

    const inputTypes = {
        'text': TextInput,
        'select': SelectInput,
        'number': NumberInput
    }
    return (
        <Form className={'dynamic-form'}>
            {props.dataSource.map(input => {
                const Input = inputTypes[input.inputType];
                return (
                    <div
                        key={input.key}
                        style={{
                            gridColumn: `span ${input.colSpan}/span ${input.colSpan}`
                        }}>
                        <Input
                            formItemProps={{
                                label: input.inputLabel,
                                name: input.inputName,
                                rules: [{
                                    required: true
                                }]
                            }}
                            inputProps={{
                              style: {
                                width: '100%'
                              }
                            }}
                        />
                    </div>
                )
            })}
        </Form>
    );
};

export default DynamicForm;
