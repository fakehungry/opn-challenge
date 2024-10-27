import type { Meta, StoryObj } from '@storybook/react';

import { SortableList } from '.';
import { useMemo, useState } from 'react';

import { createRange } from './helper';
import { DragHandle, SortableItem } from './SortableItem';
import { makeData, Person } from '../DraggableTable/makeData';
import { ColumnDef } from '@tanstack/react-table';
import DraggableTable, { RowDragHandleCell } from '../DraggableTable';

const meta: Meta<typeof SortableList> = {
  component: SortableList,
  tags: ['autodocs'],
  decorators: (Story) => {
    const getMockItems = () => {
      return createRange(3, (index) => ({
        id: index + 1,
        data: makeData(5),
      }));
    };
    const columns = useMemo<ColumnDef<Person>[]>(
      () => [
        {
          id: 'drag-handle',
          header: 'Move',
          cell: ({ row }) => <RowDragHandleCell id={row.id} />,
          size: 60,
        },
        {
          accessorKey: 'firstName',
          cell: (info) => info.getValue(),
        },
        {
          accessorFn: (row) => row.lastName,
          id: 'lastName',
          cell: (info) => info.getValue(),
          header: () => <span>Last Name</span>,
        },
        {
          accessorKey: 'age',
          header: () => 'Age',
        },
        {
          accessorKey: 'visits',
          header: () => <span>Visits</span>,
        },
        {
          accessorKey: 'status',
          header: 'Status',
        },
        {
          accessorKey: 'progress',
          header: 'Profile Progress',
        },
      ],
      [],
    );

    const [items, setItems] = useState(getMockItems);

    return (
      <Story
        args={{
          // @ts-ignore
          items,
          onChange: setItems as any,
          renderItem: (item: any) => (
            <SortableItem id={item.id}>
              {item.id}
              <DragHandle />
              <div>
                <DraggableTable
                  data={item.data}
                  columns={columns}
                  setData={() => {}}
                />
              </div>
            </SortableItem>
          ),
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof SortableList>;

export const Default: Story = {};
