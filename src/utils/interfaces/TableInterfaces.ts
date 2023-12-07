import {formInputDataSourceType} from "../types/dataSourceTypes.ts";

export interface FormInputsTableInterface {
    dataSource: formInputDataSourceType[],
    setDataSource: (prev: (prev: formInputDataSourceType[]) => formInputDataSourceType[]) => void
}