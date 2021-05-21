import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { EnumType } from "typescript";

export interface IProjectProps {}

export type TFilters = {
  text: string;
  value: string;
  children?: TFilters[];
};

export type IData = {
  key?: string;
  name?: string;
  age: number;
  type: "Company-managed software" | "Team-managed software";
};

export interface IColumn {
  title: string;
  dataIndex: string;
  filters?: TFilters[];
  defaultSortOrder?: string;
  sortDirections?: string[];
  filterMultiple?: boolean;
  // Functions
  onFilter?: (value: any, record: any) => any;
  sorter?: (a: any, b: any) => any;
}

const columns: ColumnsType<IColumn> = [
  {
    title: "Name",
    dataIndex: "name",

    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",

        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => {
      return a.name.length - b.name.length;
    },
    sortDirections: ["descend"],
  },
  {
    title: "Key",
    dataIndex: "key",
    defaultSortOrder: "descend",
    // sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
  },
  {
    title: "Type",
    dataIndex: "type",
    filters: [
      
    ],
    filterMultiple: false,
    onFilter: (value: any, record: any) => record?.address.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];

const data: any = Array.from(Array(20)).map((value: number, key: number) => {
  return {
    key,
    name: "Project " + key,
    age: Math.floor(Math.random() * key),
    type: key % 2 ? "Team-managed software":"Company-managed software",
  } ;
});

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

export const ProjectList: React.FC<IProjectProps> = () => {
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};
