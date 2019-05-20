import React, { ReactElement } from "react";
import Skeleton from "antd/lib/skeleton";
import List from "antd/lib/list";

export interface SidebarLoadingSkeletonProps {
  amount?: number;
}

export default function SidebarLoadingSkeleton(
  props: SidebarLoadingSkeletonProps
) {
  const listLength: number = props.amount || 10;

  const length = [...Array(listLength)];
  const elements: ReactElement[] = length.map((data, index) => {
    return <Skeleton active paragraph key={index} />;
  });

  return (
    <List
      itemLayout="vertical"
      dataSource={elements}
      renderItem={(element) => <List.Item>{element}</List.Item>}
      style={{
        backgroundColor: "#fdfdfd",
        padding: 10,
        borderBottom: "1px solid #ccc",
        //...languageStyles,
        cursor: "pointer",
        width: 250,
      }}
    />
  );
}
