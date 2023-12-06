import React, {FunctionComponent} from 'react';
import {MenuOutlined, DeleteOutlined} from '@ant-design/icons';
import {Button, Table} from "antd";
import {formInputsTableColumns} from "../../utils/tableColumns/FormInputsTableColumns.ts";
import {FormInputsTableInterface} from "../../utils/interfaces/TableInterfaces.ts";
import {DndContext, DragEndEvent} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext, useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities";


type Props = FormInputsTableInterface;

const FormInputsTable: FunctionComponent<Props> = (props) => {

    const onDragEnd = ({active, over}: DragEndEvent) => {
        if (active.id !== over?.id) {
            // @ts-ignore
            props.setDataSource((previous) => {
                // @ts-ignore
                const activeIndex = previous.findIndex((i) => i.key === active.id);
                // @ts-ignore
                const overIndex = previous.findIndex((i) => i.key === over?.id);
                return arrayMove(previous, activeIndex, overIndex);
            });
        }
    };

    return (
        <DndContext onDragEnd={onDragEnd}>
            <SortableContext
                items={props.dataSource.map((i) => i.key)}
                strategy={verticalListSortingStrategy}
            >
                <Table
                    components={{
                        body: {
                            row: Row,
                        },
                    }}
                    rowKey="key"
                    columns={formInputsTableColumns}
                    dataSource={props.dataSource.map(data => {
                        return {
                            ...data,
                            delete: <Button
                                danger={true}
                                // @ts-ignore
                                onClick={() => props.setDataSource((prev) => {
                                    let arr = [...prev];
                                    return arr.filter(input => input.key !== data.key)
                                })}
                            >
                                <DeleteOutlined/>
                            </Button>
                        }
                    })}
                />
            </SortableContext>
        </DndContext>
    );
};

export default FormInputsTable;

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    'data-row-key': string;
}

const Row = ({children, ...props}: RowProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: props['data-row-key'],
    });

    const style: React.CSSProperties = {
        ...props.style,
        transform: CSS.Transform.toString(transform && {...transform, scaleY: 1}),
        transition,
        ...(isDragging ? {position: 'relative', zIndex: 9999} : {}),
    };

    return (
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
            {React.Children.map(children, (child) => {
                if ((child as React.ReactElement).key === 'sort') {
                    return React.cloneElement(child as React.ReactElement, {
                        children: (
                            <MenuOutlined
                                ref={setActivatorNodeRef}
                                style={{touchAction: 'none', cursor: 'move'}}
                                {...listeners}
                            />
                        ),
                    });
                }
                return child;
            })}
        </tr>
    );
};
