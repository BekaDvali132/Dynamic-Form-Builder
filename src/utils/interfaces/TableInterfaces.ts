import {formInputDataSourceType} from "../types/dataSourceTypes.ts";

export interface FormInputsTableInterface {
    dataSource: formInputDataSourceType[],
    setDataSource: (prev:formInputDataSourceType[]) => void
}