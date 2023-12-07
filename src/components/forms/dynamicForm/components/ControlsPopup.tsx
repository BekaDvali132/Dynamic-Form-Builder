import {FunctionComponent} from 'react';
import {Button, Popover, Space} from "antd";
import {
    ArrowUpOutlined,
    ArrowDownOutlined,
    PlusOutlined,
    MinusOutlined,
    EditOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined
} from "@ant-design/icons";
import {handleSizeChangeInterface} from "../../../../utils/interfaces/FormInterfaces.ts";
import {formInputDataSourceType} from "../../../../utils/types/dataSourceTypes.ts";

interface OwnProps {
    index: number,
    setDataSource: (prev: (prev: formInputDataSourceType[]) => formInputDataSourceType[]) => void
}

interface ContentProps {
    index: number,
    handleSizeChange: (p: { increment: boolean; index: number }) => void
    handlePositionChange: (p: { increment: boolean; index: number }) => void
    handleColChange: (p: { increment: boolean; index: number }) => void
}

type Props = OwnProps;


const ControlsContent = (props: ContentProps) => (
    <Space>
        <MinusOutlined onClick={() => props.handleSizeChange({increment: false, index: props.index})}/>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ArrowUpOutlined onClick={() => props.handlePositionChange({increment: false, index: props.index})}/>
            <Space size={'large'}>
                <ArrowLeftOutlined onClick={() => props.handleColChange({increment: false, index: props.index})}/>
                <ArrowRightOutlined onClick={() => props.handleColChange({increment: true, index: props.index})}/>
            </Space>
            <ArrowDownOutlined onClick={() => props.handlePositionChange({increment: true, index: props.index})}/>
        </div>
        <PlusOutlined onClick={() => props.handleSizeChange({increment: true, index: props.index})}/>
    </Space>
)

const ControlsPopup: FunctionComponent<Props> = (props) => {

    const handleSizeChange = ({increment, index}: handleSizeChangeInterface) => {
        props.setDataSource((prev: formInputDataSourceType[]) => {
            const arr: formInputDataSourceType[] = [...prev];
            arr[index].colSpan = arr[index].colSpan + (increment ? 1 : -1)
            return arr
        })
    }

    const handlePositionChange = ({increment, index}: handleSizeChangeInterface) => {
        props.setDataSource((prev: formInputDataSourceType[]) => {
            const arr: formInputDataSourceType[] = [...prev];
            if (increment) {
                if (arr[index + 1]) {
                    const temp = arr[index + 1];
                    arr[index + 1] = arr[index]
                    arr[index] = temp
                }
            } else {
                if (arr[index - 1]) {
                    const temp = arr[index - 1];
                    arr[index - 1] = arr[index]
                    arr[index] = temp
                }
            }
            return arr
        })
    }

    const handleColChange = ({increment, index}: handleSizeChangeInterface) => {
        props.setDataSource((prev: formInputDataSourceType[]) => {
            const arr: formInputDataSourceType[] = [...prev];
            if (increment) {
                arr[index].startCol +=1;
            } else {
                arr[index].startCol -=1;
            }
            return arr
        })
    }

    return (
        <Popover
            className={'dynamic-form-item-controls'}
            content={<ControlsContent
                index={props.index}
                handleSizeChange={handleSizeChange}
                handleColChange={handleColChange}
                handlePositionChange={handlePositionChange}/>}
            trigger="click"
        >
            <Button>
                <EditOutlined/>
            </Button>
        </Popover>
    );
};

export default ControlsPopup;
