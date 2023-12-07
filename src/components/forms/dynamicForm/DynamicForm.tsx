import {FunctionComponent} from 'react';
import {FormInputsTableInterface} from "../../../utils/interfaces/TableInterfaces.ts";
import './DynamicForm.scss'
import TextInput from "../../inputs/TextInput.tsx";
import SelectInput from "../../inputs/SelectInput.tsx";
import {Form} from "antd";
import NumberInput from "../../inputs/NumberInput.tsx";
import ControlsPopup from "./components/ControlsPopup.tsx";

type Props = FormInputsTableInterface;

const DynamicForm: FunctionComponent<Props> = (props) => {

    const inputTypes = {
        'text': TextInput,
        'select': SelectInput,
        'number': NumberInput
    }


    return (
        <Form className={'dynamic-form'} layout={'vertical'}>
            {props.dataSource.map((input, index) => {
                const Input = inputTypes[input.inputType];
                return (
                    <div
                        className={'dynamic-form-item'}
                        key={input.key}
                        style={{
                            gridColumn: `span ${input.colSpan}/span ${input.colSpan}`,
                            gridColumnStart: input.startCol
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
                        <ControlsPopup index={index} setDataSource={props.setDataSource}/>
                    </div>
                )
            })}
        </Form>
    );
};

export default DynamicForm;
