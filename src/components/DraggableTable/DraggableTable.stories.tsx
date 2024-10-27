import type { Meta, StoryObj } from '@storybook/react';

import DraggableTable, { RowDragHandleCell } from '.';
import React, { SetStateAction, useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { makeData, Person } from './makeData';

const meta: Meta<typeof DraggableTable> = {
  component: DraggableTable,
  tags: ['autodocs'],
  decorators: (Story) => {
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
    const [data, setData] = useState(() => makeData(20));
    return (
      <Story
        args={{
          data,
          columns: columns as Person[],
          // @ts-ignore
          setData,
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof DraggableTable>;

export const Default: Story = {};
