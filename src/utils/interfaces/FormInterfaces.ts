import {SelectProps} from "antd/es/select";
import {InputNumberProps} from "antd/es/input-number";

export interface BaseFormItemInterface {
    formItemProps: {
        name: string,
        label: string,
        rules?: object[]
    }
}

export interface SelectFormItemInterface extends BaseFormItemInterface {
    inputProps?: SelectProps
}

export interface NumberFormItemInterface extends BaseFormItemInterface {
    inputProps?: InputNumberProps
}

export interface handleSizeChangeInterface {
    increment: boolean
    index: number
}