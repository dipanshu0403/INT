import React, { memo } from "react";
import { FixedSizeList as List } from "react-window";

const Row = memo(({ index, style, data }) => {
  const item = data[index];

  return (
    <div style={{ ...style, padding: 10, borderBottom: "1px solid #ddd" }}>
      <strong>{item.name}</strong> — {item.value}
      <div style={{ fontSize: 12 }}>
        {new Date(item.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
});

const VirtualList = ({ records }) => {
  return (
    <List
      height={500}
      itemCount={records.length}
      itemSize={60}
      width={"100%"}
      itemData={records}
    >
      {Row}
    </List>
  );
};

export default memo(VirtualList);
