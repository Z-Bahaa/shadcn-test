import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table,Typography } from "antd";

const { Text, } = Typography;

export const WarehouseTripList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  

  return (
    <List>
      <Table 
        {...tableProps} 
        // rowKey="id"
      >
        <Table.Column 
          // dataIndex="id" 
          title={"Vehicle / ID / Collector"}
          render={(value, record) => (
            <Space>
              <div style={{
                  display: "flex", 
                  width: "3rem", 
                  height: "3rem", 
                  padding: "0.125rem 0 rem",
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "1.25 rem",
                  borderRadius: "0.625rem", 
                  border:
                    "var(--size-025, 1px) solid var(--Neutral---Gray-gray-200, #E1E2E3)",
                  opacity: "var(--size-025, 1)",
                  background: "var(--Neutral---Gray-gray-120, #F5F5F5)",
                  color: "#575D64",
                }}
              >
                <img
                  src={'jjjjj'}
                  alt="car image"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <Space direction="vertical" align="start">
                <Text>
                  <Text style={{fontWeight: "700"}}>{`TRIP_ID: `}</Text>
                  {record.id}{" "}
                </Text>
                  <Text type="secondary">{record.collector_name}</Text>
              </Space>
            </Space>
          )} 
        />
        <Table.Column 
          dataIndex="total_requests" 
          title={"Requests"} 
          render={(value) => `${value} Requests`}
        />
        <Table.Column 
          dataIndex="total_uco" 
          title={"UCO"} 
          render={(value) => `${value} kilos`}
        />
        <Table.Column 
          dataIndex="distance" 
          title={"Distance"} 
          render={(value) => `${value} kilos`}
        />
        <Table.Column dataIndex="status" title={"Status"} />
        {/* <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        /> */}
      </Table>
    </List>
  );
};
