import {JSX} from "react";
import {Form} from "antd";
import TextInput from "../inputs/TextInput.tsx";
import FormSubmitButton from "../buttons/FormSubmitButton.tsx";
import {FormProps} from "antd/es/form/Form";
import SelectInput from "../inputs/SelectInput.tsx";
import {inputTypes} from "../../utils/constants.ts";
import NumberInput from "../inputs/NumberInput.tsx";

function FormBuilderForm(props: FormProps): JSX.Element {
    return (
        <Form {...props}>
            <TextInput
                formItemProps={{
                    name: 'inputName',
                    label: 'Input Name',
                    rules: [{
                        required: true,
                    }]
                }}
            />
            <TextInput
                formItemProps={{
                    name: 'inputLabel',
                    label: 'Input Label',
                    rules: [{
                        required: true,
                    }]
                }}
            />
            <NumberInput
                formItemProps={{
                    name:'colSpan',
                    label:'Column Span',
                    rules:[{
                            required: true,
                        }]
                }}
                inputProps={{
                    controls: false,
                    min: 1,
                    max: 10,
                    style: {
                        width: '100%',
                    }
                }}
            />
            <NumberInput
                formItemProps={{
                    name:'startCol',
                    label:'Start Column',
                    rules:[{
                            required: true,
                        }]
                }}
                inputProps={{
                    controls: false,
                    min: 0,
                    max: 9,
                    style: {
                        width: '100%',
                    }
                }}
            />
            <SelectInput
                inputProps={{
                    options:inputTypes
                }}
                formItemProps={{
                    name: 'inputType',
                    label: 'Input Type',
                    rules: [{
                        required: true
                    }]
                }}
            />
            <FormSubmitButton/>
        </Form>
    );
}

export default FormBuilderForm;