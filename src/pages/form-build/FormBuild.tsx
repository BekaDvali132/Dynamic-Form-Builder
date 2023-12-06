import {Form, Space} from "antd";
import type {FormInstance} from "antd/es/form/hooks/useForm";
import FormBuilderForm from "../../components/forms/FormBuilderForm.tsx";
import {FormBuildValuesInterface} from "../../utils/interfaces/FormValueInterfaces.ts";
import {useState} from "react";
import {formInputDataSourceType} from "../../utils/types/dataSourceTypes.ts";
import FormInputsTable from "../../components/tables/FormInputsTable.tsx";
import DynamicForm from "../../components/forms/dynamicForm/DynamicForm.tsx";

function FormBuild() {
    const [formInputs, setFormInputs] = useState<formInputDataSourceType[]>([])
    const [form]: [FormInstance] = Form.useForm();

    const onFinish = (values: FormBuildValuesInterface) => {
        setFormInputs((prev) => {
            let arr = [...prev];
            arr.push({
                ...values,
                key: arr.length + 1
            });
            return arr
        })
    }

    return (
        <Space direction={'vertical'} style={{
            width: '100%'
        }}>
            <FormBuilderForm
                layout={'vertical'}
                form={form}
                onFinish={onFinish}
            />
            <FormInputsTable
                setDataSource={setFormInputs}
                dataSource={formInputs}
            />
            <DynamicForm
                dataSource={formInputs}
                setDataSource={setFormInputs}
            />
        </Space>
    );
}

export default FormBuild;